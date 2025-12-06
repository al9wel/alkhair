import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 dark:from-bg-dark1 dark:to-bg-dark2">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-white dark:bg-bg-dark3 rounded-full shadow-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-16 h-16 text-primary-light"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>

        {/* Shop Name */}
        <h1 className="text-6xl md:text-8xl font-bold text-primary-light mb-4 drop-shadow-lg">
          الخير
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-text-light1 mb-2">
          لتوزيع الثلج والمياه
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
        <Link
          href="/dashboard"
          className="bg-primary-light hover:bg-primary-hover text-white text-xl font-semibold px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          الدخول إلى لوحة التحكم
        </Link>

        {/* Contact Info */}
        <div className="mt-16 text-gray-600 dark:text-text-light3">
          <p className="text-lg">للتواصل والطلبات</p>
          <p className="text-2xl font-semibold text-primary-light mt-2" dir="ltr">
            📞 +966 XX XXX XXXX
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-4 text-center text-gray-500 dark:text-text-light3">
        <p>© 2024 الخير لتوزيع الثلج والمياه - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
