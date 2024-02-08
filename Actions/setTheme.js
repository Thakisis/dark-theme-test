'use server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { setCookie, deleteCookie, hasCookie, getCookie, getCookies } from 'cookies-next'

export async function setTheme(newTheme) {
    console.log("server action", newTheme)
    if (newTheme === "unset")
        return deleteCookie('theme', { cookies })
    setCookie('theme', newTheme, { cookies })


    revalidatePath('/', 'layout')


}