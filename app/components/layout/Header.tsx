
const Header = ({ title, desc }: { title: string, desc: string }) => {
    const date = new Date();
    return (
        <div className="mb-8 flex justify-between items-center">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-black/70 dark:text-light-text">{title}</h1>
                <p className="text-black/70 text-sm md:text-[16px] dark:text-light-text mt-2">{desc}</p>
            </div>
            <p className="text-[16px] md:text-xl lg:text-2xl p-2  text-dark dark:text-light-text">{date.toLocaleDateString('ar-SA')}</p>
        </div>
    )
}


export default Header