import React from "react";
import ImgInDiv from "./ImgInDiv";
import styles from '../../modules/styling-modules/Homepage.module.css';
import HomepageFooter from "./HomepageFooter";
import { homepageImages } from "../../modules/preload";

const Homepage = function Homepage(props) {
  // An object to store information that's used in the JSX
  const [vintage] = [
    { backgroundImage: `url(${homepageImages[4].src})` },
  ];

  return (
    <div id="homepage" data-testid='homepage' className={styles.homepageDiv}>
      <div className={`homepage ${styles['about-info']}`}>
        <h1 className={styles['description-one-header']}>Our Vision...</h1>
        <p className={styles['description-one']}>
          We are a company dedicated to delivering <strong>modernity</strong> in essence, while maintaining the value of the past. We understand that fashion is a <strong>statement</strong>, and that everybody has their own <em>unique</em> sense of <strong>individuality</strong>. We embrace those who embrace <strong>uniqueness</strong> and prioritize revolutionizing the fashion world..
        </p>
      </div>
      <ImgInDiv backgroundImage={vintage} imgStyling={styles.homepageImage} stylingClass={styles['store-image-div']} src={''} alt={''} />
      <div className={`homepage ${styles['extra-info']}`}>
        <h3 className={styles['description-two-header']}>Come As You Are</h3>
        <p className={styles['description-two']}>
          One of the core foundations of our company is our motto:<strong>COME AS YOU ARE</strong>. We are a company with various differing backgrounds. This is why we emphasize the value of embracing those who may be <em>different</em> from us. As many have given us a chance, our focus is to give others that same opportunity. We aim to deliver our goals through the <em>brilliance</em> of our <strong>award-winning</strong> designers, individuals who have come from all parts of the world.
        </p>
      </div>
      <HomepageFooter styles={styles} />
    </div>
  );
};

export default React.memo(Homepage);