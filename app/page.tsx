import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200">
      <header className="flex justify-between py-2.5 px-6 rounded-md  w-full bg-light-content text-black/70 backdrop-blur-sm z-50 shadow-md">
        <div className="flex justify-center items-center">
          <Image src={logo} alt="logo" className=" w-7 -ml-1.5 " />
          <h1 className="text-3xl font-bold text-primary-light  drop-shadow-lg">
            لخير
          </h1>
        </div>
        <SignedOut>
          <div className="flex justify-center items-center gap-2">
            <Link href="/sign-in" className="bg-primary hover:bg-primary-hover rounded-md px-2 py-1 text-white border border-black/10">دخول</Link>
            <Link href="/sign-up" className="bg-primary hover:bg-primary-hover rounded-md px-2 py-1 text-white border border-black/10">تسجيل</Link>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton showName
          />
          {/* <UserAvatar /> */}
        </SignedIn>
      </header>
      {/* Hero Section */}
      <div className="flex flex-col mt-6 md:mt-2 lg:mt-0 items-center justify-center min-h-screen px-4 text-center">
        <SignedIn>
          <Link
            href="/dashboard"
            className="bg-primary mb-6 hover:bg-primary-hover text-white text-xl font-semibold px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            الدخول إلى لوحة التحكم
          </Link>
        </SignedIn>
        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-text-light1 mb-2">
          الخير للماء و الثلج الصحي
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-text-light2 mb-12 max-w-2xl">
          نوفر لكم أجود أنواع الثلج والمياه النقية بأسعار منافسة وخدمة توصيل سريعة
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl">
          <div className="bg-white/80 dark:bg-bg-dark3/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-3">❄️</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-text-light1 mb-2">
              ثلج نقي
            </h3>
            <p className="text-gray-600 dark:text-text-light3">
              ثلج صافي ونقي بأحجام متعددة
            </p>
          </div>

          <div className="bg-white/80 dark:bg-bg-dark3/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-3">💧</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-text-light1 mb-2">
              مياه معبأة
            </h3>
            <p className="text-gray-600 dark:text-text-light3">
              مياه نقية ومفلترة بأعلى المعايير
            </p>
          </div>

          <div className="bg-white/80 dark:bg-bg-dark3/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-text-light1 mb-2">
              توصيل سريع
            </h3>
            <p className="text-gray-600 dark:text-text-light3">
              خدمة توصيل سريعة لجميع المناطق
            </p>
          </div>
        </div>

        {/* CTA Button */}


        {/* Contact Info */}
        <div className="mt-16 text-gray-600 dark:text-text-light3">
          <p className="text-lg">للتواصل والطلبات</p>
          <p className="text-2xl font-semibold text-primary-light mt-2" dir="ltr">
            📞 +967 736584524
          </p>
        </div>
      </div>
      {/* Footer */}
      <footer className=" py-4 text-center text-gray-500 dark:text-text-light3">
        <p>© 2025 الخير للماء و الثلج الصحي - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
