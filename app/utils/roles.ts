import { Roles } from '@/types/globals'
import { auth } from '@clerk/nextjs/server'

export const checkRole = async (Role : Roles) => {
  const { sessionClaims } = await auth()
  return sessionClaims?.metadata.role === Role
}