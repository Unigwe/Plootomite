import { adjustment } from "../assets";
import styles, { layout } from "../style";
import Button1 from "./Button1";

const Card6 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
     you can manage your <span className="text-gradient">website</span>{" "} from your mobile phone, 
      so you don't need to be a tech savvy.
      </h2>
      

      <Button1 styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={adjustment} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Card6;