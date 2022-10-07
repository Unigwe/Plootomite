import { restaurant } from "../assets";
import styles, { layout } from "../style";
import Button1 from "./Button1";

const Card7 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      A website makes your business more credible than competitors who only have social media pages.
        
      </h2>
     

      <Button1 styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={restaurant} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Card7;