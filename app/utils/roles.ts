import { Roles } from '@/types/globals'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export const allowedRole = async (Role: Roles) => {
  const { sessionClaims } = await auth()
  const role = sessionClaims?.metadata.role === Role
    if (!role) {
        redirect("/dashboard/unauthorized")
    }
}