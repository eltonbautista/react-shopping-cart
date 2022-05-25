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
    moreInfo: '" The spirit is willing but the flesh is weak. "'
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
          {fillInformation.description}
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
              <li><button></button></li>
              <li><button></button></li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Homepage;