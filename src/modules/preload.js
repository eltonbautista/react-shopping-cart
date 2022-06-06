// Men
import hoodie from '../assets/images/mens/men-hoodie.jpg';
import bracelet from '../assets/images/mens/men-bracelet.jpg';
import jacket from '../assets/images/mens/men-blue-jacket.jpg';
import crewneck from '../assets/images/mens/men-crewneck.jpg';
import shirt from '../assets/images/mens/men-green-shirt.jpg';
import suit from '../assets/images/mens/men-suit.jpg';
import pants from '../assets/images/mens/men-white-pants.jpg';
import pouch from '../assets/images/mens/men-leather-pouch.jpg';
import watch from '../assets/images/mens/men-watch.jpg';

// Women
import womenWatch from '../assets/images/womens/women-watch.jpg';
import tank from '../assets/images/womens/women-black-tank.jpg';
import blazer from '../assets/images/womens/women-blazer.jpg';
import buttonUp from '../assets/images/womens/women-button-up.jpg';
import womenJacket from '../assets/images/womens/women-denim-jacket.jpg';
import womenShirt from '../assets/images/womens/women-gold.jpg';
import womenShorts from '../assets/images/womens/women-hand-chain.jpg';
import womenGold from '../assets/images/womens/women-shirt.jpg';
import womenHand from '../assets/images/womens/women-watch.jpg';


// A list of items I want to display in my image Carousel 
const carouselProducts = [];
const mensProducts = [];
const womensProducts = [];
const arrayOfMensImages = [jacket, crewneck, shirt, hoodie, suit, pants, bracelet, pouch, watch];
const arrayOfWomensImages = [tank, blazer, buttonUp, womenJacket, womenShirt, womenShorts, womenGold, womenHand, womenWatch];

// A function used to preload images, used to increase performance
// So weirdly enough if you export this function to the module you need it in, and then use it there, the images load slowly..
// But if you were to define this function there (create the whole thing, instead of importing it), then the performance increases
// BUT if you create the array here, and then import that array into your module, the performance is increased as well
// From this I've deduced that the function must be defined at the same place as the array being passed to it.. Not sure why
export default function preload(images, fillArr) {
  for (let i = 0; i < images.length; i += 1) {
    fillArr[i] = new Image();
    fillArr[i].src = images[i];
  }
};

preload([hoodie, bracelet, womenWatch, tank], carouselProducts);
preload(arrayOfMensImages, mensProducts);
preload(arrayOfWomensImages, womensProducts);
console.log(carouselProducts[0].currentSrc)
console.log(mensProducts[0].currentSrc);

export { carouselProducts, mensProducts, womensProducts };
