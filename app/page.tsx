import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <h1>welcom to home page</h1>
      <Link href={"/dashboard"} className="bg-blue-200 p-2 rounded-md">
        Goto Dashboard
      </Link>
    </div>
  );
}
