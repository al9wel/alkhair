"use client";

import React, { useActionState, useEffect, useState } from "react";
import { Plus, Loader2, Pen, Trash } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/app/components/ui/dialog";
import { useUIStore } from "@/app/store/uiStore";
import toast from "react-hot-toast";

type SalesData = { id?: string; name?: string; amount?: number };
type SalesDialogProps = {
    data?: SalesData;
    mode?: "create" | "update" | "delete";
    saleAction: (state: { message: string; status: number; }, formData: FormData) => Promise<{ message: string; status: number; }>
};
const SalesDialog = ({ data, mode = "create", saleAction }: SalesDialogProps) => {
    const { id = "", name = "", amount = 0 } = data ?? {};
    const { isDarkMode } = useUIStore();
    const [message, action, pending] = useActionState(saleAction, { message: "", status: 0 });
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (!pending) {
            if (message.status === 400) {
                toast.error(message.message);
            } else if (message.status === 200) {
                toast.success(message.message);
                setTimeout(() => setOpen(false), 0);
            }
        }
    }, [pending, message.message, message.status]);
    const contentClass = `${isDarkMode ? "dark" : ""} sm:max-w-[425px] text-right bg-light dark:bg-dark`;
    const renderDelete = () => (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" className={`bg-red-400 hover:bg-red-500 text-white cursor-pointer`}>
                    <Trash className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent dir="rtl" className={contentClass}>
                <form action={action} className="relative">
                    <DialogHeader>
                        <DialogTitle className="text-black/70 dark:text-light-text">حذف مبيعات</DialogTitle>
                        <DialogDescription>هل انت متاكد من الحذف ؟</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Input name="id" type="hidden" defaultValue={id} />
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={pending} className="bg-red-400 hover:bg-red-500 text-white p-2">
                            {pending && <Loader2 className="h-4 w-4 animate-spin" />}
                            حذف
                        </Button>
                        <DialogClose asChild>
                            <Button variant="outline" className="text-black/70 dark:text-light-text">إلغاء</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
    const renderCreateOrUpdate = () => (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {mode === "update" ? (
                    <Button size="sm" className={`bg-yellow-600 hover:bg-yellow-700 text-white cursor-pointer`}>
                        <Pen className="h-4 w-4" />
                    </Button>
                ) : (
                    <Button size="sm" className={`bg-primary1 hover:bg-primary-hover text-white cursor-pointer`}>
                        إضافة
                        <Plus className="h-4 w-4" />
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent dir="rtl" className={contentClass}>
                <form action={action} className="relative">
                    <DialogHeader>
                        <DialogTitle className="text-black/70 dark:text-light-text">{mode === "update" ? "تعديل المبيعات" : "إضافة مبيعات جديدة"}</DialogTitle>
                        <DialogDescription>{mode === "update" ? "قم بتعديل التفاصيل حسب الحاجة." : "أدخل تفاصيل المبيعات الجديدة هنا. اضغط حفظ عند الانتهاء."}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Input name="id" type="hidden" defaultValue={id} />
                        <Input name="name" defaultValue={name} placeholder="الاسم" />
                        <Input name="amount" type="number" defaultValue={amount} placeholder="الكمية" />
                    </div>

                    <DialogFooter>
                        <Button type="submit" disabled={pending} className="bg-primary1 hover:bg-primary-hover text-white flex items-center gap-2">
                            {pending && <Loader2 className="h-4 w-4 animate-spin" />}
                            حفظ
                        </Button>
                        <DialogClose asChild>
                            <Button variant="outline" className="text-black/70 dark:text-light-text">إلغاء</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
    if (mode === "delete") return renderDelete();
    return renderCreateOrUpdate();
};

export default React.memo(SalesDialog);
