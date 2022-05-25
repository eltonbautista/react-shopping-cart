import React, { useState, useEffect } from "react";
import hoodie from '../../assets/images/mens/men-hoodie.jpg';
import bracelet from '../../assets/images/mens/men-bracelet.jpg';
import watch from '../../assets/images/womens/women-watch.jpg';
import tank from '../../assets/images/womens/women-black-tank.jpg';
import styles from '../../modules/styling-modules/Homepage.module.css';



function Carousel() {
  const myProductInfo = [hoodie, bracelet, watch, tank];
  
  const [product, setProduct] = useState(0);
  const myStyle = {
    backgroundImage: `url(${myProductInfo[product]})`
  }

  useEffect(() => {

    const startTimer = setInterval(() => {
      setProduct((s) => {
        if(s === 3) {
          return s = 0;
        } else {
          return s + 1;
        }
      });

    }, 2000);

    return () => {
      clearInterval(startTimer);
    };

  }, []);

  console.log(product);
  
  return (
    <div style={myStyle} className={styles['carousel']} id="carousel" data-testid="carousel">
    </div>
  )
}

// setInterval(Carousel, 1000)

export default Carousel;