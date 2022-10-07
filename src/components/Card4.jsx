import { costfree } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Typed from 'react-typed';

const Card4 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Yes! we build for free what others charge so much 
       <br/>to build and  we are glad doing it.
        
      </h2>
      

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={costfree} alt="costfree" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Card4;