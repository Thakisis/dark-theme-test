"use client"
import { useTransition } from "react"
import { setTheme } from '@/Actions'
import { ThemeMenu } from '@/components/ThemeMenu'

export function ThemeNav({ theme }) {

    const [isPending, startTransition] = useTransition()
    const changeTheme = (newTheme) => {
        console.log("client", newTheme)
        startTransition(() => setTheme(newTheme))
    }

    const themeMenuList = ["light", "dark", "unset"].map(theme => <ThemeMenu key={theme} theme={theme} changeTheme={changeTheme}></ThemeMenu>)
    return themeMenuList
}



