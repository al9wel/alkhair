import Sidebar from "@/app/components/layout/Sidebar";
import Navbar from "@/app/components/layout/Navbar";
import { Toaster } from "sonner";
export default function DashboardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <section className={` relative text-gray-900`}>
            <Sidebar />
            <main className="flex  w-full flex-col bg-light-content dark:bg-dark md:pr-64 min-h-screen">
                <Navbar />
                {children}
                <Toaster position="top-center" />
            </main>
        </section>
    );
}