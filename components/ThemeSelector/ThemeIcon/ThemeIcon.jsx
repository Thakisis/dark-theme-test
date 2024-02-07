"use client"
import React, { useState } from 'react'
import styles from './ThemeIcon.module.scss'
export function ThemeIcon() {
    const [darkTheme, setDarkTheme] = useState(true)
    const iconClass = !darkTheme ? styles.themeToggle : `${styles.themeToggle} ${styles.dark}`
    return (
        <svg className={iconClass} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" onClick={() => {

            setDarkTheme(!darkTheme)
        }}>

            <mask id="moon-mask">
                <rect x="0" y="0" width="100%" height="100%" fill="black" />
                <circle cx="12" cy="12" r="10.5" fill="white" />
            </mask>

            <circle className={styles.sun} cx="12" cy="12" r="6" fill="currentColor" />
            <g className={styles.sunBeams} stroke="currentColor">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
            <g mask="url(#moon-mask)" >
                <circle className={styles.moon} cx="38" cy="-14" r="14" fill="black" />
            </g>



        </svg>
    )
}
//<circle className={styles.mask} cx="12" cy="12" r="6" fill="red" opacity={.5} />
/*
<mask class={styles.moon} id="moon-mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <circle className={styles.mask} cx="20" cy="0" r="10" fill="red" />
            </mask>
            */
/*<g class={styles.moon} id="moon-mask">
    <rect x="0" y="0" width="100%" height="100%" fill="white" />
    <circle className={styles.mask} cx="12" cy="12" r="6" fill="black" />
</g>*/