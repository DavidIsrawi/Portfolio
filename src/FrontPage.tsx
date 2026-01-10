import { useRef, useMemo, useCallback, useEffect } from "react"
import { SocialMediaIcons } from "./Icons"
import { userProfile } from "./utils/UserProfile"

interface FrontPageProps {
    setShowNameOnToolbar: (showName: boolean) => void
}

export function FrontPage(props: FrontPageProps): JSX.Element {
    const frontSectionRef = useRef<HTMLElement>(null)

    const options: IntersectionObserverInit = useMemo(() => ({
        threshold: 0.5
    }), [])

    const intersectFrontNameCallback = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            props.setShowNameOnToolbar(!entry.isIntersecting)
        })
    }, [props])

    useEffect(() => {
        const { current } = frontSectionRef
        const observer = new IntersectionObserver(intersectFrontNameCallback, options)
        if (current) observer.observe(current)
        return () => {
            if (current) observer.unobserve(current)
        }
    }, [frontSectionRef, intersectFrontNameCallback, options])

    return (
        <section id='FrontPage' ref={frontSectionRef} className="min-h-screen flex flex-col justify-around mx-auto items-center md:flex-col mb-10 md:scroll-mt-8 scroll-mt-16">
            <div className="flex flex-col md:flex-row justify-around mx-auto items-center h-1/2">
                <ProfilePic />
                <div className="w-4/5 md:w-1/2 flex flex-col justify-between md:my-0 my-8">
                    <ProfileName />
                    <ProfileDescription />
                    <SocialMediaIcons />
                </div>
            </div>
            <ScrollIndicator />
        </section>
    )
}

function ProfilePic(): JSX.Element {
    return (
        <div className="w-1/3 lg:w-1/4" tabIndex={0}>
            <img
                className="rounded-full transition-shadow duration-700 shadow-2xl hover:shadow-primary dark:hover:shadow-secondary"
                src={userProfile.img}
                alt="dahveed"
                loading="lazy"
            />
        </div>
    )
}

function ProfileName(): JSX.Element {
    return (
        <h1 className="mb-8 text-center mx-auto" tabIndex={0}>
            <strong>{userProfile.name}</strong>
        </h1>
    )
}

function ProfileDescription(): JSX.Element {
    return (
        <div tabIndex={0}>
            {userProfile.about}
            {userProfile.email && (
                <p>
                    Feel free to reach out at{' '}
                    <a className="imply_hyperlink" href={`mailto:${userProfile.email}`}>
                        {userProfile.email}
                    </a>
                </p>
            )}
        </div>
    )
}

function ScrollIndicator(): JSX.Element {
    return (
        <a href="#content" aria-label="Scroll to content">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </a>
    )
}