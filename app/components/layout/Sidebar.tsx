"use client";
import { useUIStore } from "@/app/store/uiStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.png";
import { useClerk } from "@clerk/nextjs";
import {
    LogOut, Settings, X,
    Home,
    ShoppingCart,
    Receipt,
    ArrowDownCircle,
    CreditCard,
    Users,
    UserCog,
    BarChart3,
    Boxes,
    Package,
} from "lucide-react"

const links = [
    {
        name: "الرئيسية",
        href: "/dashboard",
        icon: <Home />,
    },
    {
        name: "المبيعات",
        href: "/dashboard/sales",
        icon: <ShoppingCart />,
    },
    {
        name: "المصروفات",
        href: "/dashboard/expenses",
        icon: <Receipt />,
    },
    {
        name: "المسحوبات",
        href: "/dashboard/withdrawals",
        icon: <ArrowDownCircle />,
    },
    {
        name: "الديون",
        href: "/dashboard/debts",
        icon: <CreditCard />,
    },
    {
        name: "العملاء",
        href: "/dashboard/customers",
        icon: <Users />,
    },
    {
        name: "الموظفين",
        href: "/dashboard/employees",
        icon: <UserCog />,
    },
    {
        name: "التقارير",
        href: "/dashboard/reports",
        icon: <BarChart3 />,
    },
    {
        name: "المنتجات",
        href: "/dashboard/products",
        icon: <Package />,
    },
    {
        name: "المخزون",
        href: "/dashboard/inventory",
        icon: <Boxes />,
    },
]


const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar, setPageTitle } = useUIStore();
    const pathname = usePathname();
    const { signOut } = useClerk();
    return (
        <>
            <div onClick={toggleSidebar} className={`${isSidebarOpen ? "translate-x-0" : "translate-x-full"}  md:hidden w-full h-screen backdrop-blur-[1px] bg-black/30 dark:bg-black/50 z-45 fixed`}></div>
            <aside
                className={`${isSidebarOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 h-screen w-64 md:translate-x-0  transition-all duration-300 z-50 bg-light dark:bg-dark text-black/50 dark:text-light-text border border-border1/30 dark:border-border1/15`}
            >
                <div className="w-full flex items-center justify-between px-3 py-[13px] border-b border-border1/30 dark:border-border1/15 ">
                    <div className="flex justify-center items-center md:w-full">
                        <Image src={logo} alt="logo" className=" w-9 md:w-9" />
                        <h1 className="text-2xl md:text-3xl font-bold text-primary1">
                            الخير
                        </h1>
                    </div>
                    <button
                        className="md:hidden text-black/50 dark:text-light-text cursor-pointer h-min w-min rounded p-1 hover:text-primary1 duration-150"
                        onClick={toggleSidebar}>
                        <X />
                    </button>
                </div>
                {/* <hr className="h-[1px] w-[80%] mx-auto border-0 bg-gradient-to-r from-transparent via-light-text dark:via-light-text/30 to-transparent" /> */}
                <ul className="flex flex-col gap-2 mt-4">
                    {links.map((link) => (
                        <li key={link.name} className="px-2">
                            <Link onClick={() => setPageTitle(link.name)} href={link.href} className={`flex gap-2 p-2 ${pathname === link.href ? "bg-primary1 text-white" : ""} transition-all    duration-200  hover:bg-primary-hover hover:text-white rounded-xl`}>
                                {link.icon}
                                <h2>{link.name}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="px-2 pb-4 mt-2 border-t border-border1/30 dark:border-border1/15">
                    {/* <hr className="h-[1px] w-[80%] mx-auto border-0 bg-gradient-to-r from-transparent via-light-text dark:via-light-text/30 to-transparent" /> */}
                    <Link onClick={() => setPageTitle("الاعدادت")} href={"/dashboard/settings"} className={`flex gap-2 p-2 mt-2 ${pathname === "/dashboard/settings" ? "bg-primary1 text-white" : ""} transition-all    duration-200  hover:bg-primary-hover hover:text-white rounded-xl`}>
                        <Settings className="size-6 cursor-pointer " />
                        <h2>الاعدادت</h2>
                    </Link>
                    <button
                        onClick={() => signOut()}
                        className={`flex gap-2 w-full mt-2  p-2  transition-all cursor-pointer duration-200   hover:bg-primary-hover hover:text-white rounded-lg`}>
                        <LogOut className="size-6 cursor-pointer " />
                        <h2>تسجيل الخروج</h2>
                    </button>
                </div>
            </aside>

        </>
    )
}

export default Sidebar
