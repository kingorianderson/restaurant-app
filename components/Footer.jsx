import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          WE MEAT THE HIGHEST STANDARD.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Biashara Street.
            <br /> Nairobi
            <br /> 000 000 000
          </p>
          <p className={styles.text}>
            Gakere Road.
            <br /> Nyeri
            <br /> 000 000 000
          </p>
          <p className={styles.text}>
           Opposite Bus Station.
            <br /> Nanyuki
            <br /> 000 000 000
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 7:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 8:00 – 19:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
