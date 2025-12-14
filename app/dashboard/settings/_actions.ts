'use server'

import { clerkClient } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function setRole(formData: FormData) {
    const client = await clerkClient()
  // Check that the user trying to set the Role is an admin
    try {
        const role = formData.get('role')
        await client.users.updateUserMetadata(formData.get('id') as string, {
            publicMetadata: { role },
        })
        revalidatePath('/dashboard/settings')
        redirect('/dashboard/settings')
    } 
    catch (err) {
        console.log(err)
    }
}