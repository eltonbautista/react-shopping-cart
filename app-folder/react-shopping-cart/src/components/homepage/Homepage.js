import React from "react";

const Homepage = ({title, }) => {
  return (
    <div id="home-page" data-testid='home-page'>
      <h1>{title}</h1>
    </div>
  )
};

export default Homepage;