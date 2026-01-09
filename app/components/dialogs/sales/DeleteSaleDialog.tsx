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
            await deleteSale1(_id)
            router.refresh();
            setIsLoading(false);
            setDialog(false);
            toast.success("تم حذف المبيعات بنجاح",
                {
                    duration: 2000,
                    icon: "✅",
                    style: { color: "green" }
                }
            );
        } catch (error) {
            setIsLoading(false);
            setDialog(false);
            console.error(error);
            toast.error("حصلت مشكلة اثناء حذف المبيعات حاول مره اخرى",
                {
                    duration: 2000,
                    icon: "❌",
                    style: { color: "red" }
                }
            );
        }
    }
    return (
        <Dialog open={dialog} onOpenChange={setDialog}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className={`cursor-pointer text-red-500 hover:text-red-600`}>
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
