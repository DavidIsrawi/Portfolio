import React from "react"
import { SocialMediaIcons } from "./Icons"
import { userProfile } from "./utils/UserProfile"

interface FrontPageProps {
    setShowNameOnToolbar: (showName: boolean) => void
}

export const FrontPage = (props: FrontPageProps) => {

    const frontSectionRef = React.useRef(null)

    const options: IntersectionObserverInit = React.useMemo(() => ({
        threshold: 0.5
    }), [])

    const intersectFrontNameCallback = React.useCallback((entries: IntersectionObserverEntry[]) => {        
        entries.forEach(entry => {
            props.setShowNameOnToolbar(!entry.isIntersecting)
        })
    }, [props])

    React.useEffect(() => {
        const { current } = frontSectionRef
        const observer = new IntersectionObserver(intersectFrontNameCallback, options)
        if (current) observer.observe(current)
        return () => {
            if (current) observer.unobserve(current)
        }
    }, [frontSectionRef, intersectFrontNameCallback, options])

    return (
        <section id='FrontPage' ref={frontSectionRef} className="min-h-screen flex flex-col justify-around mx-auto items-center md:flex-col mb-10">
            <div className="flex flex-col md:flex-row justify-around mx-auto items-center h-1/2">

                <ProfilePic/>
                
                <div className="w-1/2 flex flex-col justify-between md:my-0 my-8">
                    <ProfileName/>
                    <ProfileDescription/>
                    <SocialMediaIcons/>
                </div>
            </div>
            <ScrollImplier/>
        </section>
    )
}

const ProfilePic = () => {
    return (
        // TODO: Whenever we update to Tailwing v3, update this pic to have an different shadow on hover
        <div className="w-1/3 lg:w-1/4" tabIndex={0}>
            <img className="rounded-full shadow-2xl" src={userProfile.img} alt="dahveed" loading="lazy"/>
        </div>
    )
}

const ProfileName = () => {
    return (
        <h1 className="mb-8 text-center mx-auto" tabIndex={0}>
            <strong>
                {userProfile.name}
            </strong>
        </h1>
    )
}

const ProfileDescription = () => {
    return (
        <p tabIndex={0}>
            {
                userProfile.about.map(sentence => {
                    return <p className="mb-5">{sentence}</p>
                })
            }
            {
                userProfile.email ? 
                    <p>Feel free to reach out at <a className="font-bold border-transparent transition-all duration-400 border-b-4 hover:border-accent focus:border-accent" href={`mailto:${userProfile.email}`}>{userProfile.email}</a></p>
                    :
                    null
            }
        </p>
    )
}

const ScrollImplier = () => {
    return (
        <a href="#content">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </a>
    )
}