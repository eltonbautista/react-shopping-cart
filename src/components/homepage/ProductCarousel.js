import React, { useState, useEffect } from "react";
import styles from '../../modules/styling-modules/Homepage.module.css';
import { homepageImages } from "../../modules/preload";


function Carousel() {

  const [product, setProduct] = useState(0);
  const myStyle = {
    backgroundImage: `url(${homepageImages[product].src})`
  }

  // My thinking was that I needed some way to re-render my component an infinite number of times, setInterval seemed appropriate
  // The simplest way to re-render would be to create a state of int values going with the same index amount of myProductInfo
  // After looking at the React docs useEffect() hook seemed to be the most appropriate to use here since:
  // 1. The timer needed to be be mounted after render to avoid bugs
  // 2. The timer needs to be unmounted after each tick to prevent bugs
  useEffect(() => {

    // setInterval is assigned to startTimer variable, in it we set the state of product using function form.
    // Function form allows us to make sure the correct previous value is used.
    // When product(s) hits the value of 3, then setProduct(0), else: setProduct(product + 1)
    const startTimer = setInterval(() => {
      setProduct((s) => {
        if(s === 3) {
          return s = 0;
        } else {
          return s + 1;
        }
      });

    }, 2000);
    // Used to unmount timer
    return () => {
      clearInterval(startTimer);
    };
    // Mounting only occurs once
  }, []);
  
  return (
    <div style={myStyle} className={styles['carousel']} id="carousel" data-testid="carousel">
    </div>
  )
}

export default React.memo(Carousel);