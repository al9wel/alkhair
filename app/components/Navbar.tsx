"use client";
import { useUIStore } from "@/store/uiStore";
import { Menu, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
const getTitle = (pathname: string) => {
    switch (pathname) {
        case "/dashboard": {
            return " الرئيسية";
        }
        case "/sales": {
            return "المبيعات";
        }
        case "/expenses": {
            return "المصروفات";
        }
        case "/settings": {
            return "الاعدادت";
        }
    }
}
const Navbar = () => {
    const { isDarkMode, toggleSidebar, toggleDarkMode } = useUIStore();
    const pathname = usePathname();

    return (
        <nav className="flex items-center h-16 justify-between fixed top-0 left-0 w-full md:w-[calc(100%-16rem)]   bg-bg-light1 dark:bg-bg-dark2 px-4 py-3 text-black/70 dark:text-text-light1 border-b border-text-light2/50 dark:border-text-light2/25">
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="h-min block md:hidden cursor-pointer w-min rounded p-2 hover:text-primary-light duration-150 ">
                    <Menu className="" />
                </button>
                <h1 className="text-xl md:text-2xl font-extrabold ">{getTitle(pathname)}</h1>
            </div>
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={toggleDarkMode}
                    className="h-min cursor-pointer w-min rounded p-2  hover:text-primary-light duration-150 ">
                    {isDarkMode ? <Sun /> : <Moon />}
                </button>
                {/* user */}
                <div className="flex items-center gap-1">
                    <Image
                        src={"/al9wel.jpeg"}
                        alt="user avatar"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                    <p className="text-[16px] font-medium hidden sm:block">سالم احمد الصويل</p>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;