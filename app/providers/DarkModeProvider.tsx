"use client";

import { ReactNode, useEffect } from "react";
import { useUIStore } from "../store/uiStore";

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    const { isDarkMode, toggleDarkMode } = useUIStore();
    // معرفه ايش القيمه المخزنه في اللوكال ستورج وتطبيقها
    useEffect(() => {
        const stored = localStorage.getItem("isDarkMode");
        if (stored !== null) {
            toggleDarkMode(JSON.parse(stored));
        }
    }, [toggleDarkMode]);
    // isDarkMode عند الضغط على زر الدارك تتغير قيمه 
    // ويتم تفعيل هاذا اليوز ايفييكت ف اما يطبق الكلاس دارك او يحذفه 
    // ثم يحدث اللوكال ستورج
    useEffect(() => {
        const html = document.documentElement;
        if (isDarkMode) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return <>{children}</>;
};

export default DarkModeProvider;
