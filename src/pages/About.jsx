import { useRef, useEffect } from 'react';
import styles from '../styles/aboule.module.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className={styles.about} onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
      <h1>About Us</h1>
      <p>
        Fuel order online is a service that allows customers to order fuel for their vehicles from the convenience of their homes or offices, without having to physically go to a gas station. This service typically works by allowing customers to select the type and quantity of fuel they need, along with the location and time of delivery. The fuel is then delivered directly to the customer's location by a fuel truck. Fuel order online services offer several benefits to customers, including convenience, time savings, and the ability to avoid long queues and wait times at gas stations. Additionally, some services offer additional features such as real-time tracking of the fuel delivery, multiple payment options, and the ability to schedule recurring deliveries.
      </p>
      <div className={styles.arrow}>&#8595;</div>
      <div ref={aboutRef}></div>
    </div>
  );
};

export default About;