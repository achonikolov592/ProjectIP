import Image from "next/image";
import styles from "./page.module.css"
import Buttons from "./components/buttons"

export default function Home() {
  return (
      <div className={styles.all}>
        <div className={styles.header1}>
          <h2 className="text-6xl font-bold">Welcome to Paralia Ofrinio!</h2>
        </div>
          <Buttons/>
      </div>
  );
}
