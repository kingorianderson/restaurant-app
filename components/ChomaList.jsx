import styles from "../styles/ChomaList.module.css";
import ChomaCard from "./ChomaCard"

const ChomaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST CHOMA VILLAGE IN TOWN</h1>
      <p className={styles.desc}>
      Nyama choma is Kenya's unofficial national dish, meaning barbecued meat in the Swahili language. The meat is usually goat or beef, served roasted throughout the country, from roadside shacks to fine restaurants. It is often paired with local beer and side dishes such as ugali.
      </p>
      <div className={styles.wrapper}>
          <ChomaCard/>
          <ChomaCard/>
          <ChomaCard/>
          <ChomaCard/>
          <ChomaCard/>
          <ChomaCard/>
          <ChomaCard/> 
          <ChomaCard/>
      </div>
    </div>
  );
};

export default ChomaList;
