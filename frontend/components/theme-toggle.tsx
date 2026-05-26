"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Ensure component is mounted on the client before rendering the toggle icon
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // Return a transparent placeholder of the exact same size to prevent layout shift
        return <div className="w-9 h-9 rounded-full border-2 border-transparent" />
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-4 w-4 text-white" />
            ) : (
                <Moon className="h-4 w-4 text-black" />
            )}
        </button>
    )
}