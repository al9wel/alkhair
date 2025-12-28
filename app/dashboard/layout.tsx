"use client";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useUIStore } from "@/app/store/uiStore";
import { useEffect } from "react";
export default function DashboardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const { isDarkMode, toggleDarkMode } = useUIStore();
    useEffect(() => {
        const storedIsDarkMode = localStorage.getItem("isDarkMode");
        if (storedIsDarkMode !== null) {
            toggleDarkMode(JSON.parse(storedIsDarkMode));
        }
    }, []);
    return (
        <section className={`${isDarkMode ? "dark" : ""} relative text-gray-900`}>
            {/* <aside className="w-64 z-40 absolute inset-0 md:relative  bg-blue-50 border-l border-gray-200" /> */}
            <Sidebar />
            <main className="flex  w-full flex-col bg-light dark:bg-dark md:pr-64 min-h-screen">
                <Navbar />
                {children}
            </main>
        </section>
    );
}