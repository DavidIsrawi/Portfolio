import React from "react";
import { DarkThemeIcon, LightThemeIcon } from "./Icons";

export const ThemeIcon = () => {
    const [isLightTheme, setIsLightTheme] = React.useState(false);

    React.useEffect(() => {
        const isDarkThemeApplied = document.documentElement?.classList.contains("dark")
        setIsLightTheme(!isDarkThemeApplied)
    }, [isLightTheme])

    const toggleTheme = () => {
        // do the opposite logic as we're about to switch the state
        if (isLightTheme) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        setIsLightTheme(isLightTheme => !isLightTheme)
    }

    return (
        <button onClick={() => toggleTheme()} aria-label="Switch Theme">
            { isLightTheme ?
                <DarkThemeIcon/>
            :
                <LightThemeIcon/>
            }
        </button>
    )
}