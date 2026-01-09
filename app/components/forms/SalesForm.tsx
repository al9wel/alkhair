"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { createSale1, updateSale1 } from "../../(pages)/dashboard/sales/actions";

export type SalesType = {
    _id?: string;
    name?: string;
    amount?: string
}

interface SalesFormProps {
    sale?: SalesType;
    dialog: (v: boolean) => void;
}
const formSchema = z.object({
    name: z.string().min(2).max(50),
    amount: z.string(),
});

const SalesForm = ({ sale, dialog }: SalesFormProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: sale?.name || "",
            amount: sale?.amount || "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            if (sale) {
                await updateSale1({ ...values, _id: sale._id, });
            } else {
                await createSale1(values);
            }
            form.reset();
            router.refresh();
            setIsLoading(false);
            dialog(false)
            toast.success(
                sale ? "تم تعديل المبيعات بنجاح" : "تمت اضافة المبيعات بنجاح",
                {
                    duration: 2000,
                    icon: "✅",
                    style: { color: "green" }
                }
            )
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            dialog(false)
            toast.error(
                sale
                    ? "حصلت مشكلة اثناء تعديل المبيعات حاول مره اخرى"
                    : "حصلت مشكلة اثناء اضافة المبيعات حاول مره اخرى",
                {
                    duration: 2000,
                    icon: "❌",
                    style: { color: "red" }
                }
            )
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="text-black/70 dark:text-light-text space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>الاسم</FormLabel>
                            <FormControl>
                                <Input placeholder="سالم احمد" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>الكميه</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="الكميه" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isLoading} className={`bg-primary1 hover:bg-primary-hover text-white cursor-pointer w-full`}>
                    {isLoading ? (
                        <Loader2 className="size-6 animate-spin" />
                    ) : (
                        `${sale ? "تعديل" : "اضافة"}`
                    )}
                </Button>
            </form>
        </Form>
    );
}
export default SalesForm;