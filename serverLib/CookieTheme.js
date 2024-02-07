"use server"
import { cookies } from 'next/headers'

export async function getCookieTheme() {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')
    if (!theme)
        return 'unset'
    if (theme === 'dark')
        return 'dark'

    return "light"
}