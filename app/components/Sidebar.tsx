"use client";
import { useUIStore } from "@/store/uiStore";
import { BadgeCheck, Home, LogOut, Settings, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.png";
const links = [
    {
        name: " الرئيسية",
        href: "/dashboard",
        active: "dashboard",
        icon: <Home />
    },
    {
        name: "المبيعات",
        href: "/sales",
        active: "sales",
        icon: <Home />
    },
    {
        name: "المصروفات",
        href: "/expenses",
        active: "expenses",
        icon: <Home />
    },
    {
        name: "المسحوبات",
        href: "/",
        active: "",
        icon: <Home />
    },
    {
        name: "الديون",
        href: "/",
        active: "",
        icon: <Home />
    },
    {
        name: "العملاء",
        href: "/",
        active: "",
        icon: <Home />
    },
    {
        name: "الموظفين",
        href: "/",
        active: "",
        icon: <Home />
    },
    {
        name: "التقارير",
        href: "/",
        active: "",
        icon: <Home />
    },
    {
        name: "المخزون",
        href: "/",
        active: "",
        icon: <Home />
    },
    {
        name: "المنتجات",
        href: "/",
        active: "",
        icon: <Home />
    },
    {
        name: "البضاعه",
        href: "/",
        active: "",
        icon: <Home />
    }
]

const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useUIStore();
    const pathname = usePathname();
    console.log(pathname);
    return (
        // <aside className={`${isSidebarOpen ? "translate-x-50" : "translate-x-0"} fixed top-0 right-0 md:relative md:translate-x-0  min-h-screen  transition-all duration-300 z-40 overflow-y-auto bg-bg-light1 dark:bg-bg-dark2 dark:text-white/90 w-50 md:w-64  border border-text-light2/50 dark:border-text-light2/25 `}>
        <aside
            className={`${isSidebarOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 h-screen w-64md:translate-x-0  transition-all duration-300 z-40 bg-bg-light1 dark:bg-bg-dark2 dark:text-white/90 border border-text-light2/50 dark:border-text-light2/25`}
        >
            <div className="w-full flex items-center justify-between px-3 py-3.5 ">
                <div className="flex justify-center items-center md:w-full">
                    <Image src={logo} alt="logo" className=" w-9 md:w-9" />
                    <h1 className="text-2xl md:text-3xl font-bold text-primary-light">
                        الخير
                    </h1>
                </div>
                <button
                    className="md:hidden text-text-light3 cursor-pointer h-min w-min rounded p-1 hover:text-primary-light duration-150"
                    onClick={toggleSidebar}>
                    <X />
                </button>
            </div>
            <hr className="h-[1px] w-[80%] mx-auto border-0 bg-gradient-to-r from-transparent via-text-light2 dark:via-text-light2/50 to-transparent" />
            <ul className="flex flex-col gap-2 mt-4">
                {links.map((link) => (
                    <li key={link.name} className="px-2">
                        <Link href={link.href} className={`flex gap-2 p-2 ${pathname === link.href ? "bg-primary-light text-white" : "text-text-light3"} transition-all    duration-200  hover:bg-primary-hover hover:text-white rounded-xl`}>
                            {link.icon}
                            <h2>{link.name}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="px-2 pb-4 mt-6">
                <hr className="h-[1px] w-[80%] mx-auto border-0 bg-gradient-to-r from-transparent via-text-light2 dark:via-text-light2/50 to-transparent" />
                <Link href={"/settings"} className={`flex gap-2 p-2 ${pathname === "/settings" ? "bg-primary-light text-white" : "text-text-light3"} transition-all    duration-200  hover:bg-primary-hover hover:text-white rounded-xl`}>
                    <Settings className="size-6 cursor-pointer " />
                    <h2>الاعدادت</h2>
                </Link>
                <button className={`flex gap-2 w-full mt-2  p-2  transition-all cursor-pointer duration-200 text-text-light3  hover:bg-primary-hover hover:text-white rounded-lg`}>
                    <LogOut className="size-6 cursor-pointer " />
                    <h2>تسجيل الخروج</h2>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
