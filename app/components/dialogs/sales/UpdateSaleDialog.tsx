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
import { Edit, Loader2 } from "lucide-react";
import SalesForm, { SalesType } from "../../forms/SalesForm";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const UpdateSaleDialog = ({ sale }: { sale: unknown }) => {
    const [dialog, setDialog] = useState(false);
    const handleDialog = (v: boolean) => {
        setDialog(v)
    }
    const saleData = sale as SalesType;
    const queryClient = useQueryClient()
    const getProducts = async () => {
        const response = await fetch("/api/products");
        const data = await response.json();
        return data;
    }
    const { data: products, isLoading } = useQuery({ queryKey: ['products'], queryFn: getProducts })
    return (
        <Dialog open={dialog} onOpenChange={handleDialog}>
            <DialogTrigger asChild>
                <Button onClick={getProducts} variant="ghost" size="sm" className={`cursor-pointer bg-blue-400/80 hover:bg-blue-600/80 text-white hover:text-white dark:hover:bg-blue-600/80`}>
                    <Edit className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className={` sm:max-w-[425px] text-right bg-light dark:bg-dark`}>
                <DialogHeader>
                    <DialogTitle className="text-black/70 dark:text-light-text">
                        تعديل مبيعات
                    </DialogTitle>
                    <DialogDescription>
                        أدخل تعديلات المبيعات هنا. اضغط تعديل عند الانتهاء.
                    </DialogDescription>
                </DialogHeader>
                {isLoading ? (
                    <div className="flex justify-center items-center w-full">
                        <Loader2 className="size-8 animate-spin text-black/70 dark:text-light-text " />
                    </div>
                ) : (
                    <SalesForm dialog={handleDialog} sale={saleData} products={products} />
                )}
                <DialogClose asChild>
                    <Button variant="outline" className="text-black/70 dark:text-light-text">إلغاء</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateSaleDialog
