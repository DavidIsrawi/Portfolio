import { GithubIcon, InstagramIcon, LinkedInIcon, TwitchIcon, TwitterIcon } from "./SocialIcons"
import { userProfile } from "./utils/UserProfile"

export const FrontPage = () => {
    return (
        <section className="h-screen flex flex-col justify-around mx-auto items-center md:flex-col">
            <div className="flex flex-col md:flex-row justify-around mx-auto items-center h-1/2">

                {/* profile pic */}
                <div className="w-1/2 md:w-1/3 lg:w-1/4">
                    <img className="rounded-full shadow-2xl" src={userProfile.img} alt="dahveed" loading="lazy"/>
                </div>
                
                {/* profile description */}
                <div className="w-1/2 text-center flex flex-col justify-between md:my-0 my-8">
                    <h1 className="text-5xl mb-8">
                        <strong>
                            {userProfile.name}
                        </strong>
                    </h1>
                    <p className="text-xl">{userProfile.description}</p>
                    <div className="flex flex-row justify-evenly pt-8 self-center w-2/3">
                        <TwitchIcon/>
                        <InstagramIcon/>
                        <GithubIcon/>
                        <TwitterIcon/>
                        <LinkedInIcon/>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </section>
            
            
    )
}