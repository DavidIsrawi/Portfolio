import { ThemeIcon } from './ThemeIcon'
import { userProfile } from './utils/UserProfile'
import { userContent } from './utils/UserContent'

interface ToolbarProps {
    showName: boolean
}

export function Toolbar(props: ToolbarProps): JSX.Element {
    return (
        <div className="top-0 py-1 sticky flex flex-wrap justify-around px-3 bg-light dark:bg-dark transition-colors duration-300 z-10">
            {props.showName && <ToolbarTitle title={userProfile.name} />}
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
}

function ToolbarTitle(props: ToolbarTitleProps): JSX.Element {
    return (
        <a className='font-bold text-2xl' href='#FrontPage'>
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