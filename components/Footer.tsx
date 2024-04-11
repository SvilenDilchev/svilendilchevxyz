import Link from "next/link"
import styles from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerText}>
                <p>
                    Inspired by <Link href={"https://ericmurphy.xyz/"}><u>Eric Murphy</u></Link>.
                </p>
                <br />
                <p>
                    Last updated on April 11, 2024.
                </p>
                <br />
                <p>
                    Built with <Link href={"https://nextjs.org/"}><u>Next.js</u></Link>. View the source code <Link href={"https://github.com/SvilenDilchev"}><u>on GitHub</u></Link>.
                </p>
            </div>
        </div>
    )
}