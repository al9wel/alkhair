"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { useMemo, useState } from "react";
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
import { Button } from "@/app/components/ui/button";
import { createSale1, updateSale1 } from "../../(pages)/dashboard/sales/actions";

export type SalesType = {
    _id?: string;
    name?: string;
    amount?: number;
    products: ProductsType[];
    totalPrice: number
}
export type ProductsType = {
    productId: string;
    name: string;
    price: number;
    quantity: number,
}
export type Products = {
    _id?: string;
    name?: string;
    price?: number
}

interface SalesFormProps {
    sale?: SalesType;
    dialog: (v: boolean) => void;
    products?: Products[]
}
const formSchema = z.object({
    name: z.string().min(1, "الاسم مطلوب"),
    amount: z.coerce.number().min(1, "الكمية مطلوبة"),
    products: z.array(
        z.object({
            productId: z.string(),
            name: z.string(),
            price: z.number(),
            quantity: z.coerce.number().min(0),
        })
    ).min(1),
});
type FormFields = "name" | "amount"

const SalesForm = ({ sale, dialog, products }: SalesFormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const prod = useMemo(() => {
        if (sale) {
            return sale.products.map((p) => ({
                productId: p.productId,
                name: p.name,
                price: p.price,
                quantity: p.quantity,
            }));
        }
        return products?.map((p) => ({
            productId: p._id!,
            name: p.name!,
            price: p.price!,
            quantity: 0,
        })) ?? [];
    }, [sale, products]);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: sale?.name || "",
            amount: sale?.amount || null,
            products: prod ?? [],
        },
    });
    const watchedProducts = useWatch({
        control: form.control,
        name: "products",
    });
    const totalPrice = useMemo(() => {
        return watchedProducts.reduce((total, product) => {
            return total + (product.quantity as any * product.price);
        }, 0);
    }, [watchedProducts])
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            if (sale) {
                const res = await updateSale1({ ...values, _id: sale._id, totalPrice });
                if (!res.success) {
                    if (res.field) {
                        form.setError(res.field as FormFields, {
                            message: res.message,
                        });
                        setIsLoading(false);
                    } else {
                        toast.error(res.message || "حصلت مشكلة", {
                            icon: "❌",
                            duration: 2500,
                        });
                        setIsLoading(false);
                    }
                    return;
                }
            }
            else {
                const res = await createSale1({ ...values, totalPrice });
                if (!res.success) {
                    if (res.field) {
                        form.setError(res.field as FormFields, {
                            message: res.message,
                        });
                        setIsLoading(false);
                    } else {
                        toast.error(res.message || "حصلت مشكلة", {
                            icon: "❌",
                            duration: 2500,
                        });
                        setIsLoading(false);
                    }
                    return;
                }
            }
            form.reset();
            // router.refresh();
            setIsLoading(false);
            dialog(false)
            toast.success(
                sale ? "تم تعديل المبيعات بنجاح" : "تمت اضافة المبيعات بنجاح",
                {
                    duration: 2500,
                    icon: "✅",
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
                    duration: 2500,
                    icon: "❌",
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
                                <Input
                                    type="number"
                                    placeholder="الكمية"
                                    value={
                                        typeof field.value === "number" || typeof field.value === "string"
                                            ? field.value
                                            : ""
                                    }
                                    onChange={(e) => field.onChange(e.target.value)}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {prod?.map((product, index) => (
                    <FormField
                        key={product.productId}
                        control={form.control}
                        name={`products.${index}.quantity`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    {product.name} — السعر: {product.price}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        required
                                        type="number"
                                        placeholder="الكمية"
                                        value={
                                            typeof field.value === "number" || typeof field.value === "string" ? field.value : ""
                                        }
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
                <FormLabel>السعر الاجمالي</FormLabel>
                <FormLabel className="text-green-400">{totalPrice.toLocaleString() + " ريال "}</FormLabel>
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