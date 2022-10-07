import { card } from "../assets";
import styles, { layout } from "../style";
import Button1 from "./Button1";

const Card9 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Sell your goods and services on <br/>a <span className="text-gradient">website</span>{" "}
        that showcases your brand and what it represent.
      </h2>
      

      <Button1 styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Card9;