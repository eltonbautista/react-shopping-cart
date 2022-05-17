import React from "react";
import ImgInDiv from "./ImgInDiv";

const Homepage = (props) => {
  // An object to store information that's used in the JSX
  const fillInformation = {
    description: 'Webpage Description',
    imgOneSrc: '',
    imgOneAlt: '',
    imgTwoSrc: '',
    imgTwoAlt: '',
    extraInfoHeading: 'Extra Information Heading',
    extraInfo: '',
  }


  return (
    <div id="homepage" data-testid='homepage'>
      <div className="homepage about-info">
        <h1>{fillInformation.description}</h1>
      </div>
      <ImgInDiv src={fillInformation.imgOneSrc} alt={fillInformation.imgOneAlt} />
      <ImgInDiv src={fillInformation.imgTwoSrc} alt={fillInformation.imgTwoAlt} />
      <div className="homepage extra-info">
        <h3>{fillInformation.extraInfoHeading}</h3>
        <p>
          {fillInformation.extraInfo}
        </p>
      </div>
    </div>
  );
};

export default Homepage;