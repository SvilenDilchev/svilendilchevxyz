import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import githubLogo from "../assets/github/github-mark-white.svg"
import linkedinLogo from "../assets/linkedin/LI-In-Bug.png"

export default function Navbar() {

    return (
        <div className={styles.navbar}>
            <div className={styles.navbarHomeButton}>
                <Link href={"/"} className={styles.navButton}>
                    <h2>Svilen Dilchev</h2>
                </Link>
            </div>
            <div className={styles.navButtons}>
                <Link href={"/"} className={styles.navButton}>
                    <span>Projects</span>
                </Link>
                <Link href={"/"} className={styles.navButton}>
                    <span>Contact</span>
                </Link>
            </div>
            <div className={styles.navIcons}>
                <Link href={"https://github.com/SvilenDilchev"}>
                    <Image
                        src={githubLogo}
                        alt="GitHub?"
                        height="30"
                    />
                </Link>
                <Link href={"https://www.linkedin.com/in/svilen-dilchev/"}>
                    <Image
                        src={linkedinLogo}
                        alt="LinkedIn?"
                        height="30"
                    />
                </Link>
            </div>
        </div>
    )
}
