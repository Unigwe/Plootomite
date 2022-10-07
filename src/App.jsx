import styles from "./style";
import { Accordion, Card1, Card2, Card3, Card4, Card5, Billing, Business, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Billing />
        <Card5 />
        <Testimonials />
        <Clients />
        <Accordion />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;