"use client";
import { useUIStore } from "@/store/uiStore";
import { Menu, Moon, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const getTitle = (pathname: string) => {
    switch (pathname) {
        case "/dashboard": {
            return "لوحه التحكم";
        }
        case "/sales": {
            return "المبيعات";
        }
        case "/expenses": {
            return "المصروفات";
        }
    }
}
const Navbar = () => {
    const { toggleSidebar, toggleDarkMode } = useUIStore();
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-between shadow-sm dark:shadow-white/20 bg-gray-100 dark:bg-bg-dark1 px-4 py-3 text-black/70 dark:text-white/90">
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="h-min block md:hidden cursor-pointer w-min rounded p-2 hover:bg-gray-200 bg-gray-100 dark:bg-bg-dark4 hover:dark:bg-bg-dark3">
                    <Menu className="" />
                </button>
                <h1 className="text-xl md:text-2xl font-extrabold ">{getTitle(pathname)}</h1>
            </div>
            <div className="flex items-center justify-center gap-1">
                <Link
                    href={"/settings"}
                    className="h-min w-min rounded p-2 bg-gray-100 hover:bg-gray-200 hover:text-blue-500 duration-150 dark:bg-bg-dark4 hover:dark:bg-bg-dark3">
                    <Settings className="size-6 cursor-pointer " />
                </Link>
                <button
                    onClick={toggleDarkMode}
                    className="h-min cursor-pointer w-min rounded p-2 bg-gray-100 hover:text-blue-500 duration-150 hover:bg-gray-200 dark:bg-bg-dark4 hover:dark:bg-bg-dark3">
                    <Moon />
                </button>
            </div>
        </nav>
    )
}
export default Navbar;