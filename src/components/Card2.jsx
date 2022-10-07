import { onlineshop } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Card2 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      All
      you
      need to start
      Selling
      on your <span className="text-gradient">web</span>{""}site is your 
      web<span className="text-gradient">site.</span>{""}
      </h2>
      

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={onlineshop} alt="onlineshop" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Card2;