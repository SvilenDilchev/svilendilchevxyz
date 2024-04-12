import Link from "next/link";
import Image from "next/image";
import linkedinLogo from "@/assets/linkedin/LI-In-Bug.png";
import styles from "../page.module.css";

export default function Contact() {

    return (
        <main className={styles.main}>
            <h1>Contact</h1>
            <p className={styles.description}>
                You can contact me at any of the following:
                <br />
                <br />
                <br />
                <ul className={styles.contactList}>
                    <li>Email -- sdilchev@gmail.com</li>
                    <li>Email -- svilendilchev@gmail.com</li>
                    <li>
                        <p>LinkedIn --</p>
                        <Link href={"https://www.linkedin.com/in/svilen-dilchev/"}>
                            <Image
                                src={linkedinLogo}
                                alt="LinkedIn?"
                                height="30"
                            />
                        </Link>
                    </li>
                </ul>
            </p>
        </main>
    )
}