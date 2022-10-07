import { questions } from "../assets";
import styles, { layout } from "../style";
import Button1 from "./Button1";
import Typed from 'react-typed';

const Card5 = () => (
  <section id="clients" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Newbie?🤗
      </h2>
      

      <Button1 styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={questions} alt="questions" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Card5;