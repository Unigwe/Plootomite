import { elearning } from "../assets";
import styles, { layout } from "../style";
import Button1 from "./Button1";

const Card14 = () => (
  <section id="clients" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      We build you <br/>a strong first impression.
      </h2>
     

      <Button1 styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={elearning} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Card14;