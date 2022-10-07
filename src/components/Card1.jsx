import { mobilephony } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Card1 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      You can manage your <span className="text-gradient">website</span>{" "} from your mobile phone,
      so you don't need to be a tech savvy.
      </h2>
      

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={mobilephony} alt="mobilephone" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Card1;