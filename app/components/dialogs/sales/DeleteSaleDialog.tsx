"use client"
import { Button } from "@/app/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/app/components/ui/dialog";
import { useUIStore } from "@/app/store/uiStore";
import { Loader2, Trash } from "lucide-react";
import { deleteSale1 } from "../../../(pages)/dashboard/sales/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
const DeleteSaleDialog = ({ sale }: { sale: unknown }) => {
    const { _id } = sale as { _id: string }
    const { isDarkMode, } = useUIStore()
    const [dialog, setDialog] = useState(false)
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const handleDelete = async () => {
        setIsLoading(true);
        setDialog(true)
        try {
            const res = await deleteSale1(_id)
            if (!res.success) {
                toast.error(res.message || "حصلت مشكلة", {
                    icon: "❌",
                    duration: 2500,
                });
                setIsLoading(false);
                return;
            }
            // router.refresh();
            setIsLoading(false);
            setDialog(false);
            toast.success("تم حذف المبيعات بنجاح",
                {
                    duration: 2500,
                    icon: "✅",
                }
            );
        } catch (error) {
            setIsLoading(false);
            setDialog(false);
            console.error(error);
            toast.error("حصلت مشكلة اثناء حذف المبيعات حاول مره اخرى",
                {
                    duration: 2500,
                    icon: "❌",
                }
            );
        }
    }
    return (
        <Dialog open={dialog} onOpenChange={setDialog}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className={`cursor-pointer bg-red-400/80 hover:bg-red-600/80 text-white hover:text-white dark:hover:bg-red-600/80 `}>
                    <Trash className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className={`${isDarkMode ? "dark" : ""} sm:max-w-[425px] text-right bg-light dark:bg-dark`}>
                <DialogHeader>
                    <DialogTitle className="text-black/70 dark:text-light-text">
                        حذف مبيعات
                    </DialogTitle>
                    <DialogDescription>
                        لايمكن التراجع من هذه العمليه. اضغط الزر للحذف .
                    </DialogDescription>
                </DialogHeader>
                <Button onClick={handleDelete} disabled={isLoading} className={`bg-primary1 hover:bg-primary-hover text-white cursor-pointer w-full`}>
                    {isLoading ? (
                        <Loader2 className="size-6 animate-spin" />
                    ) : (
                        "حذف"
                    )}
                </Button>
                <DialogClose asChild>
                    <Button variant="outline" className="text-black/70 dark:text-light-text">إلغاء</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteSaleDialog
