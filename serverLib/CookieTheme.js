"use server"
import { cookies } from 'next/headers'
import { setCookie, getCookie, getCookies, deleteCookie, hasCookie } from 'cookies-next'
export async function getCookieTheme() {

    const theme = getCookie('theme', { cookies })

    if (!theme)
        return 'unset'
    if (theme === 'dark')
        return 'dark'

    return "light"
}