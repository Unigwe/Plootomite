import styles from "../style";
import Button from "./Button";

const CTA2 = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} sm:flex-row flex-col bg-black`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>We believe in you</h2>
      
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA2;