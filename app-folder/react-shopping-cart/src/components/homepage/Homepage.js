import React from "react";
import ImgInDiv from "./ImgInDiv";
import styles from '../../modules/styling-modules/Homepage.module.css';
import inStore from '../../assets/images/design/picture-of-store.jpg';

const Homepage = (props) => {
  // An object to store information that's used in the JSX
  const fillInformation = {
    descriptionHeader: 'Our Vision...',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgOneSrc: '',
    imgOneAlt: 'store',
    imgTwoSrc: '',
    imgTwoAlt: '',
    extraInfoHeading: 'Extra Information Heading',
    extraInfo: '',
  }

  return (
    <div id="homepage" data-testid='homepage' className={styles.homepageDiv}>
      <div className={`homepage ${styles['about-info']}`}>
        <h1 className={styles.descriptionHeader}>{fillInformation.descriptionHeader}</h1>
        <p className={styles.description}>{fillInformation.description}</p>
      </div>
      <ImgInDiv imgStyling={styles.homepageImage} stylingClass={styles['store-image-div']} src={fillInformation.imgOneSrc} alt={fillInformation.imgOneAlt} />
      <div className={`homepage ${styles['extra-info']}`}>
        <h3 className={styles.description}>{fillInformation.extraInfoHeading}</h3>
        <p className={styles.description}>
          {fillInformation.description}
        </p>
      </div>
      <ImgInDiv src={fillInformation.imgTwoSrc} stylingClass={styles['lady-sitting-image-div']} alt={fillInformation.imgTwoAlt} />

    </div>
  );
};

export default Homepage;