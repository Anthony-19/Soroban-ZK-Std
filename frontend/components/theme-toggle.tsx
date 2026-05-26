"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    // Pull in 'resolvedTheme' to handle the 'system' default state correctly
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Ensure component is mounted on the client to prevent hydration mismatch (FOUC)
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // A transparent placeholder that perfectly holds the layout space while loading
        return <div className="w-9 h-9 rounded-full border border-transparent" />
    }

    // Determine if we are currently in dark mode (resolves system preferences too)
    const isDark = resolvedTheme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-black dark:border-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors focus:outline-none"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="h-4 w-4 text-white" />
            ) : (
                <Moon className="h-4 w-4 text-black" />
            )}
        </button>
    )
}