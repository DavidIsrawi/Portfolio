import { useState, useEffect } from "react"
import { DarkThemeIcon, LightThemeIcon } from "./Icons"

export function ThemeIcon(): JSX.Element {
    const [isLightTheme, setIsLightTheme] = useState(() => {
        return !document.documentElement?.classList.contains("dark")
    })

    useEffect(() => {
        if (isLightTheme) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }, [isLightTheme])

    function toggleTheme(): void {
        setIsLightTheme(prev => !prev)
    }

    return (
        <button onClick={toggleTheme} aria-label="Switch Theme">
            {isLightTheme ? <DarkThemeIcon /> : <LightThemeIcon />}
        </button>
    )
}