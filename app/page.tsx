import Image from "next/image";
import styles from "./page.module.css";
import WrappedImage from "@/components/WrappedImage";

export default function Home() {

  const profileImageProps = {
    sideSize: "300px",
    borderRadius: "50%",
  }

  return (
    <main className={styles.main}>
      <WrappedImage params={profileImageProps}/>
      <p className={styles.description}>
        Greetings! I'm Svilen, a second-year Computer Science student hailing from Bulgaria and currently studying at King's College London.
        I have an insatiable curiosity for all things tech-related, and my journey into the world of computing has been nothing short of exhilarating.
      </p>
    </main>
  );
}
