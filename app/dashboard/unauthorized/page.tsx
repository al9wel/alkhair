import Link from "next/link";

const UnauthorizedPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-black/70 dark:text-light-text">
            <h1 className="text-4xl font-bold text-red-500 mb-4">
                🚫 لا يمكنك الدخول
            </h1>
            <p className=" mb-6">
                لا تملك الصلاحية للوصول إلى هذه الصفحة
            </p>
            <Link
                href="/dashboard"
                className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700"
            >
                العودة للداشبورد
            </Link>
        </div>
    )
}
export default UnauthorizedPage;
