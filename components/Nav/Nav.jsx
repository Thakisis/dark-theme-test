
import styles from './Nav.module.scss'
import Link from "next/link"
import { menus } from "@/config"
import { ThemeSelector } from '../ThemeSelector/ThemeSelector'
import { ThemeNav } from './ThemeNav'
export function Nav(props) {
    const Menus = menus.map(({ url, text }) => <Link key={url} href={url}>{text}</Link>)


    return (
        <div className={styles.navContainer}>
            <nav>{Menus}</nav>
            <div className={styles.navThemes}>
                <ThemeNav></ThemeNav>
                <ThemeSelector></ThemeSelector>

            </div>
        </div>
    )
}


