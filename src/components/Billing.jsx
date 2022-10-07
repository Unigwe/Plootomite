import { buildingwebsites } from "../assets";
import styles, { layout } from "../style";
import Button2 from "./Button2";
import Typed from 'react-typed';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={buildingwebsites} alt="buildingwebsites" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
        Let's build you the next big thing.
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Our free web design pack is for newbies only,
       we build simple websites for this category to get started with their business, 
       if your needs won't be met under this category, we advise you purchase one of our pro plans for a more complex website with more features and increased functionality.
      </p>

      <Button2 styles={`mt-10`} />
    </div>
  </section>
);

export default Billing;
