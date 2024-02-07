"use client"
import { getMediaTheme } from "@/clientLib"
import { useEffect, useState } from "react"

function ThemeClient(props) {
    const [theme, setTheme] = useState()

    useEffect(() => {
        setTheme(getMediaTheme())
    }, [])


    return (
        <div>
            theme Scheme: {theme}
        </div>
    )
}

export default ThemeClient

