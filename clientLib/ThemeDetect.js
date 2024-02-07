
export function getMediaTheme() {

    if (!matchMedia('(prefers-color-scheme)').matches)
        return "notset"
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        return "dark"
    return "light"


}