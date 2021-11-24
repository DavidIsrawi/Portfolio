export const FrontPage = () => {
    return (
        <div className="h-screen flex flex-col justify-around mx-auto items-center md:flex-row">
            <img className="w-1/2 md:w-1/3 lg:w-1/4 rounded-full" src="./dahveedProfile.jpg" alt="dahveed" loading="lazy"/>
            
            <p className="w-1/3 text-center">Welcome! This is my new page, I'm learning how to program with Tailwind CSS</p>
        </div>
    )
}