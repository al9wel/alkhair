"use client";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useUIStore } from "@/store/uiStore";
export default function DashboardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const { isDarkMode } = useUIStore();

    return (
        <div className={`${isDarkMode ? "dark" : ""} min-h-screen flex relative text-gray-900`}>
            {/* <aside className="w-64 z-40 absolute inset-0 md:relative  bg-blue-50 border-l border-gray-200" /> */}
            <Sidebar />
            <main className="flex w-full flex-col bg-gray-100 dark:bg-bg-dark1">
                <Navbar />
                {children}
            </main>
        </div>
    );
}