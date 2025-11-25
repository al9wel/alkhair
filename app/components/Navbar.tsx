"use client";
import { useUIStore } from "@/store/uiStore";
import { Menu, Moon, Settings } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const { toggleSidebar, toggleDarkMode } = useUIStore();
    return (
        <nav className="flex items-center justify-between shadow-sm bg-white dark:bg-bg-dark2 px-4 py-3 text-black/70 dark:text-white/90">
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="h-min block md:hidden cursor-pointer w-min rounded p-2 hover:bg-gray-200 bg-gray-100 dark:bg-bg-dark4 hover:dark:bg-bg-dark3">
                    <Menu className="" />
                </button>
                <h1 className="text-xl md:text-2xl font-extrabold ">مياه الخير الصحيه</h1>
            </div>
            <div className="flex items-center justify-center gap-1">
                <Link
                    href={"/settings"}
                    className="h-min w-min rounded p-2 bg-gray-100 hover:bg-gray-200 dark:bg-bg-dark4 hover:dark:bg-bg-dark3">
                    <Settings className="size-6 cursor-pointer " />
                </Link>
                <button
                    onClick={toggleDarkMode}
                    className="h-min cursor-pointer w-min rounded p-2 bg-gray-100 hover:bg-gray-200 dark:bg-bg-dark4 hover:dark:bg-bg-dark3">
                    <Moon />
                </button>
            </div>
        </nav>
    )
}
export default Navbar;