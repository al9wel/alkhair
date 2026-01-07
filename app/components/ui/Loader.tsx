import { Loader2 } from 'lucide-react'

const Loader = () => {
    return (
        <div className=' flex-col  flex justify-center items-center'>
            <h1 className='text-black/70 dark:text-light-text text-2xl mb-6'>جاري تحميل البيانات</h1>
            <Loader2 size={50} className="animate-spin text-black/70 dark:text-light-text" />
        </div>
    )
}

export default Loader
