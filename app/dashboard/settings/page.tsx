import { redirect } from 'next/navigation'
import { clerkClient } from '@clerk/nextjs/server'
import { setRole } from './_actions'
import { checkRole } from '@/app/utils/roles'

export default async function AdminDashboard() {
    const role = await checkRole("admin")
    if (!role) {
        redirect('/dashboard')
    }
    const client = await clerkClient()
    const { data } = await client.users.getUserList({
        orderBy: 'created_at',
    })
    return (
        <div className='mt-20'>
            <p>هذه الصفحه للادمن فقط</p>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">الاسم</th>
                            <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">الايميل</th>
                            <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">الدور</th>
                            <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">العمليات</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-900">{user.fullName}</td>
                                <td className="px-4 py-2 text-sm text-gray-900">{user.emailAddresses[0].emailAddress}</td>
                                <td className="px-4 py-2 text-sm text-gray-900 capitalize">{user.publicMetadata.role as string}</td>
                                <td className="px-4 py-2 text-sm text-gray-900 flex gap-2">
                                    {user.publicMetadata.role as string === 'user' ? (
                                        <form action={setRole}>
                                            <input type="hidden" value={user.id} name="id" />
                                            <input type="hidden" value="admin" name="role" />
                                            <button type="submit" className="px-2 py-1 bg-orange-500 text-white rounded hover:bg-orange-600"> تحديث</button>
                                        </form>
                                    ) : (
                                        <form action={setRole}>
                                            <input type="hidden" value={user.id} name="id" />
                                            <input type="hidden" value="user" name="role" />
                                            <button type="submit" className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"> تحديث</button>
                                        </form>
                                    )
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}