import { ThemeIcon } from './ThemeIcon'
import { userProfile } from './utils/UserProfile'
import { userContent } from './utils/UserContent'

interface ToolbarProps {
    showName: boolean
}

export function Toolbar(props: ToolbarProps): JSX.Element {
    return (
        <div className="top-0 py-1 sticky flex flex-wrap justify-around items-center px-3 bg-light dark:bg-dark transition-colors duration-300 z-10">
            <ToolbarTitle title={userProfile.name} showName={props.showName} />
            {userContent.contentTypes.map(type => (
                <ToolbarButton key={type.type} title={type.type} />
            ))}
            <ToolbarButton title="Travel" />
            <ThemeIcon />
        </div>
    )
}

interface ToolbarTitleProps {
    title: string
    showName: boolean
}

function ToolbarTitle(props: ToolbarTitleProps): JSX.Element {
    return (
        <a className={`hidden sm:block w-44 font-bold text-2xl transition-opacity duration-200 ${props.showName ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} href='#FrontPage' aria-hidden={!props.showName} tabIndex={props.showName ? 0 : -1}>
            {props.title}
        </a>
    )
}

interface ToolbarButtonProps {
    title: string
}

function ToolbarButton(props: ToolbarButtonProps): JSX.Element {
    return (
        <a className="px-2 pb-1 border-transparent transition-all duration-400 border-b-4 hover:border-accent focus:border-accent" href={`#${props.title}`}>
            {props.title}
        </a>
    )
}
