'use server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { setCookie, deleteCookie } from 'cookies-next'

export async function setTheme(theme) {

    setCookieTheme(theme)
    revalidatePath('/', 'layout')
}
function setCookieTheme(theme) {
    if (theme === "unset") {
        return deleteCookie('theme', { cookies })
    }
    setCookie('theme', theme, { cookies })
}