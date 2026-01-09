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
import { Plus } from "lucide-react";
import SalesForm from "../../forms/SalesForm";
import { useState } from "react";
const CreateSaleDialog = () => {
    const { isDarkMode } = useUIStore()
    const [dialog, setDialog] = useState(false);
    const handleDialog = (v: boolean) => {
        setDialog(v)
    }
    return (
        <Dialog open={dialog} onOpenChange={handleDialog}>
            <DialogTrigger asChild>
                <Button size="sm" className={`bg-primary1 hover:bg-primary-hover text-white cursor-pointer`}>
                    إضافة
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className={`${isDarkMode ? "dark" : ""} sm:max-w-[425px] text-right bg-light dark:bg-dark`}>
                <DialogHeader>
                    <DialogTitle className="text-black/70 dark:text-light-text">
                        إضافة مبيعات جديدة
                    </DialogTitle>
                    <DialogDescription>
                        أدخل تفاصيل المبيعات الجديدة هنا. اضغط حفظ عند الانتهاء.
                    </DialogDescription>
                </DialogHeader>
                <SalesForm dialog={handleDialog} />
                <DialogClose asChild>
                    <Button variant="outline" className="text-black/70 dark:text-light-text">إلغاء</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default CreateSaleDialog
