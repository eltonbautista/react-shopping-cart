import React from "react";

const Homepage = (props) => {
  // An object to store information that's used in the JSX
  const fillInformation = {
    description: 'Webpage Description',
    imgOneSrc: '',
    imgOneAlt: '',
    imgTwoSrc: '',
    imgTwoAlt: '',
    extraInfo: '',
  }


  return (
    <div id="homepage" data-testid='homepage'>
      <div className="homepage about-info">
        <h1>{fillInformation.description}</h1>
      </div>
      <div className="homepage img-one">
        <img src={fillInformation.imgOneSrc} alt={fillInformation.imgOneAlt}/>
      </div>
      <div className="homepage img-two">
        <img src={fillInformation.imgTwoSrc} alt={fillInformation.imgTwoAlt} />
      </div>
      <div className="homepage extra-info">
        <p>
          {fillInformation.extraInfo}
        </p>
      </div>
    </div>
  );
};

export default Homepage;