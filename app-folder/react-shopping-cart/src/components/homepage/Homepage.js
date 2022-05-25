import React from "react";
import ImgInDiv from "./ImgInDiv";
import styles from '../../modules/styling-modules/Homepage.module.css';
import inStore from '../../assets/images/design/picture-of-store.jpg';

const Homepage = (props) => {
  // An object to store information that's used in the JSX
  const fillInformation = {
    descriptionHeader: 'Our Vision...',
    description: 
    'We are a company dedicated to delivering modernity in essence... Whilst maintaining the value of the past. We understand that fashion is a statement and that everybody has their own unique sense of individuality. We embrace those who embrace uniqueness and prioritize revolutionizing the fashion fashion fashion world..',
    imgOneSrc: '',
    imgOneAlt: 'store',
    imgTwoSrc: '',
    imgTwoAlt: '',
    extraInfoHeading: 'Come As You Are',
    extraInfo: 'One of the core foundations of our company is our motto: COME AS YOU ARE. We are a company with various differing backgrounds, this is why we emphasize the value of embracing those who may be different from us. As others have given us a chance, we have focused creating this company to give others that opportunity and we are doing this through our award-winning designers who have come from all depths of the world to create the ultimate clothing - no.. Fashion Coporation!',
    moreInfo: '"The spirit is willing but the flesh is weak."'
  }

  return (
    <div id="homepage" data-testid='homepage' className={styles.homepageDiv}>
      <div className={`homepage ${styles['about-info']}`}>
        <h1 className={styles['description-one-header']}>{fillInformation.descriptionHeader}</h1>
        <p className={styles['description-one']}>{fillInformation.description}</p>
      </div>
      <ImgInDiv imgStyling={styles.homepageImage} stylingClass={styles['store-image-div']} src={fillInformation.imgOneSrc} alt={fillInformation.imgOneAlt} />
      <div className={`homepage ${styles['extra-info']}`}>
        <h3 className={styles['description-two-header']}>{fillInformation.extraInfoHeading}</h3>
        <p className={styles['description-two']}>
          {fillInformation.extraInfo}
        </p>
      </div>
      <ImgInDiv src={fillInformation.imgTwoSrc} stylingClass={styles['lady-sitting-image-div']} alt={fillInformation.imgTwoAlt} />
      <div className={styles['description-three-div']}>
        <h2>
          {fillInformation.moreInfo}
        </h2>
        <div>Transitioning pictures of product</div>
        <div className={styles['footer-div']}>
          <div className={styles['links-div']}>
            <h3>Creator</h3>
            <ul>
              <li>
                <a href="https://github.com/eltonbautista" target="_blank" 
                   rel="noopener noreferrer">Github</a>
                </li>
              <li>
                <a href="https://twitter.com/psychtotech" target="_blank" 
                   rel="noopener noreferrer">Twitter</a>
                </li>
              <li>
                <a href="https://www.linkedin.com/in/elton-bautista-496a011ab/" target="_blank" 
                   rel="noopener noreferrer">LinkedIn</a>
                </li>
            </ul>
          </div>

          <div className={styles['links-div']}>
            <h3>Company</h3>
            <ul>
              <li><button>About</button></li>
              <li><button>Contact Us</button></li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Homepage;