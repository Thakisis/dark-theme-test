"use client"


export function ThemeMenu({ theme, changeTheme, selected }) {

    return <div onClick={() => changeTheme(theme)} style={{ color: selected ? "white" : "gray" }} > {theme}</div >

}

