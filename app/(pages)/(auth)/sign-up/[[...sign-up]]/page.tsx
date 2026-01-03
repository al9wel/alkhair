import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-100 to-blue-200">
            <SignUp />
        </div>
    )
}