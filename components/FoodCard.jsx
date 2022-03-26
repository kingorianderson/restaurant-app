import Image from "next/image";
import styles from "../styles/FoodCard.module.css";

const FoodCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/cake.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Cake</h1>
      <span className={styles.price}>KSh 99</span>
      <p className={styles.desc}>
      Lorem ipsum dolor sit...
      </p>
    </div>
  );
};

export default FoodCard;
