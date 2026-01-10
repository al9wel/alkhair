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
import { Edit } from "lucide-react";
import SalesForm, { SalesType } from "../../forms/SalesForm";
import { useState } from "react";

const UpdateSaleDialog = ({ sale }: { sale: unknown }) => {
    const { isDarkMode } = useUIStore()
    const [dialog, setDialog] = useState(false);
    const handleDialog = (v: boolean) => {
        setDialog(v)
    }
    const data = sale as SalesType
    return (
        <Dialog open={dialog} onOpenChange={handleDialog}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className={`cursor-pointer bg-blue-400/80 hover:bg-blue-600/80 text-white hover:text-white dark:hover:bg-blue-600/80`}>
                    <Edit className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className={`${isDarkMode ? "dark" : ""} sm:max-w-[425px] text-right bg-light dark:bg-dark`}>
                <DialogHeader>
                    <DialogTitle className="text-black/70 dark:text-light-text">
                        تعديل مبيعات
                    </DialogTitle>
                    <DialogDescription>
                        أدخل تعديلات المبيعات هنا. اضغط تعديل عند الانتهاء.
                    </DialogDescription>
                </DialogHeader>
                <SalesForm dialog={handleDialog} sale={data} />
                <DialogClose asChild>
                    <Button variant="outline" className="text-black/70 dark:text-light-text">إلغاء</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateSaleDialog
