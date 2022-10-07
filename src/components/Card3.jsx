import { webshop } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Card3 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      A <span className="text-gradient">website</span>{" "}
      keeps<br/>
     you Selling
     even with or without a physical store.
      </h2>
     

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={webshop} alt="webshop" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Card3;