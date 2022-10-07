import { superpower } from "../assets";
import styles, { layout } from "../style";
import Button1 from "./Button1";

const Card8 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       97% of people searched online to find a local business near them
      <span className="text-gradient"></span>{" "} 
      
      </h2>

      <Button1 styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={superpower} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Card8;