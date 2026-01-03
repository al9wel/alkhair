'use server'

import { allowedRole } from '@/app/lib/roles'
import {  clerkClient } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

export async function setRole(formData: FormData) {
    // Check that the user trying to set the Role is an admin
    await allowedRole("admin");
    try {
        const client = await clerkClient()
        const newRole = formData.get('role')
        await client.users.updateUserMetadata(formData.get('id') as string, {
            publicMetadata: { role: newRole },
        })
        revalidatePath('/dashboard/settings')
    } 
    catch (err) {
        console.log(err)
    }
}