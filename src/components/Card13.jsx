import { elearning } from "../assets";
import styles, { layout } from "../style";
import Button1 from "./Button1";

const Card13 = () => (
  <section id="clients" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        81% of people researched a 
        business online prior to making <br/> a purchase decision.
      </h2>
     

      <Button1 styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={elearning} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Card13;