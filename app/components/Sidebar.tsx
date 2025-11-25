"use client";
import { useUIStore } from "@/store/uiStore";
import { BadgeCheck, Home, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
    {
        name: "لوحه التحكم",
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
    }
]
const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useUIStore();
    const pathname = usePathname();
    console.log(pathname);
    return (
        <aside className={`${isSidebarOpen ? "translate-x-80" : "translate-x-0"} fixed md:relative md:translate-x-0 flex flex-col min-h-full justify-between shadow-xl transition-all duration-300 z-40 overflow-y-auto bg-white dark:bg-bg-dark2 dark:text-white/90 w-64 md:w-80 `}>
            <div className="flex h-full flex-col justify-start">
                {/* logo */}
                <div className="z-50 min-h-[56px] w-full flex items-center justify-between  px-6 ">
                    <h1 className="text-xl font-bold text-transparent bg-gradient-to-l from-blue-400 to-blue-800 bg-clip-text">
                        نظام الخير
                    </h1>
                    <button
                        className="md:hidden cursor-pointer h-min w-min rounded p-1 bg-gray-100 hover:bg-gray-200 dark:bg-bg-dark4 hover:dark:bg-bg-dark3"
                        onClick={toggleSidebar}>
                        <X />
                    </button>
                </div>
                {/* user */}
                <div className="border-y border-gray-200 dark:border-gray-700 py-2 px-4">
                    <div className="flex items-center gap-4">
                        <Image
                            src={"/al9wel.jpeg"}
                            alt="user avatar"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div className="text-[16px] font-medium">سالم احمد</div>
                    </div>
                    <div className="flex items-center text-sm gap-1 text-black/50 dark:text-white/50 mt-2">
                        <BadgeCheck size={20} />
                        <p>مدخل بيانات</p>
                    </div>
                </div>
                {/* links */}
                <ul className="flex flex-col gap-4 mt-4">
                    {links.map((link) => (
                        <li key={link.name} className="px-2">
                            <Link href={link.href} className={`flex gap-2 p-2 ${pathname === link.href ? "bg-gray-400/80 dark:bg-bg-dark3 border-r-4 border-blue-400" : "bg-gray-100 dark:bg-bg-dark4"} transition-all duration-200  hover:dark:bg-bg-dark3 hover:bg-gray-400/80 rounded-md`}>
                                {link.icon}
                                <h2>{link.name}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
