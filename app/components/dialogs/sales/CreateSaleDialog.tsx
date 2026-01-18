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
import { Loader2, Plus } from "lucide-react";
import SalesForm from "../../forms/SalesForm";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
const CreateSaleDialog = () => {
    const [dialog, setDialog] = useState(false);
    const queryClient = useQueryClient()
    const handleDialog = (v: boolean) => {
        setDialog(v)
    }
    const getProducts = async () => {
        const response = await fetch("/api/products");
        const data = await response.json();
        return data;
    }
    const { data, isLoading } = useQuery({ queryKey: ['products'], queryFn: getProducts })
    return (
        <Dialog open={dialog} onOpenChange={handleDialog}>
            <DialogTrigger asChild>
                <Button size="sm" className={`bg-primary1 hover:bg-primary-hover text-white cursor-pointer`}>
                    إضافة
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className={` sm:max-w-[425px] text-right bg-light dark:bg-dark`}>
                <DialogHeader>
                    <DialogTitle className="text-black/70 dark:text-light-text">
                        إضافة مبيعات جديدة
                    </DialogTitle>
                    <DialogDescription>
                        أدخل تفاصيل المبيعات الجديدة هنا. اضغط حفظ عند الانتهاء.
                    </DialogDescription>
                </DialogHeader>
                {isLoading ? (
                    <div className="flex justify-center items-center w-full">
                        <Loader2 className="size-8 animate-spin text-black/70 dark:text-light-text " />
                    </div>
                ) : (
                    <SalesForm dialog={handleDialog} products={data.data} />
                )}
                <DialogClose asChild>
                    <Button variant="outline" className="text-black/70 dark:text-light-text">إلغاء</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default CreateSaleDialog
