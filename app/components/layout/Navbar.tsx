"use client";
import { useUIStore } from "@/app/store/uiStore";
import { Menu, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useClerk, useUser } from "@clerk/nextjs";
const Navbar = () => {
    const { isDarkMode, pageTitle, toggleSidebar, toggleDarkMode } = useUIStore();
    const { user } = useUser()
    const { openUserProfile } = useClerk();
    const handleDarkModeClick = () => {
        console.log("toggling dark mode")
        const newValue = !isDarkMode
        localStorage.setItem("isDarkMode", JSON.stringify(newValue))
        toggleDarkMode();
    }
    return (
        <nav className="flex items-center h-16 justify-between z-40 fixed top-0 left-0 w-full md:w-[calc(100%-16rem)]   bg-light dark:bg-dark px-5  text-black/70 dark:text-light-text border-b border-border1/30 dark:border-border1/15">
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="h-min block md:hidden cursor-pointer w-min rounded p-2 hover:text-primary duration-150 ">
                    <Menu className="" />
                </button>
                <h1 className="text-xl md:text-2xl text-black/70 dark:text-white/80 font-extrabold ">{pageTitle}</h1>
            </div>
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={handleDarkModeClick}
                    className="h-min cursor-pointer w-min rounded p-2  hover:text-primary duration-150 ">
                    {isDarkMode ? <Sun /> : <Moon />}
                </button>
                <button
                    onClick={() => openUserProfile()}
                    className="flex items-center gap-1 cursor-pointer">
                    <Image
                        src={user?.imageUrl || '/avatar.png'}
                        alt="user avatar"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                    <p className="text-[16px] font-medium hidden sm:block">{user?.fullName}</p>
                </button>
            </div>
        </nav>
    )
}
export default Navbar;