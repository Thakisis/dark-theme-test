import Image from "next/image"
import styles from "./page.module.css"
import { MainHome } from "@/components/MainHome"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <MainHome></MainHome>
      </div>
    </main>
  )
}
