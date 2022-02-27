import Image from "next/image";
import styles from "../styles/ChomaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/nyama-choma-sukuma-wiki-ugali-and-kachumbari.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>NYAMA CHOMA UGALI</h1>
      <span className={styles.price}>KSh 450</span>
      <p className={styles.desc}>
      Nyama choma, sukuma wiki, ugali and kachumbari
      </p>
    </div>
  );
};

export default PizzaCard;
