import S1 from '../assets/s1-tossed.webp';
import S2 from '../assets/s2-caesar.webp';
import S3 from '../assets/s3-leafygreen.webp';
import S4 from '../assets/s4-greek.webp';
import S5 from '../assets/s5-fatoush.webp';
import S6 from '../assets/s6-nicoise.webp';
import S7 from '../assets/s7-cobb.webp';
import S8 from '../assets/s8-chicken.webp';
import Roll1 from '../assets/paneer roll.png';
import Roll2 from '../assets/chickenroll.png';
import Roll3 from '../assets/veg roll.png';
import Roll4 from '../assets/mtroll.png';
import Roll5 from '../assets/muttonroll.png';
import Roll6 from '../assets/chowmeinroll.png';
import Roll7 from '../assets/springroll.png';
import Roll8 from '../assets/scroll.png';
import Roll9 from '../assets/paneer roll.png';
import BBQ from '../assets/bbqpizza.jpg';
import Schezwan from '../assets/schezzwan margherita.jpg';
import TandooriPaneer from '../assets/tandooripaneerpizza.jpg';
import ChickenTikka from '../assets/chickentikkapizza.jpg';
import VeggieSupreme from '../assets/veggie supreme pizza.jpg';
import MurgMakhini from '../assets/murg makhini pizza.jpg';
import CheesyMushrrom from '../assets/cheesymushroom.jpg';
import Tandoori from '../assets/tandoori pizza.jpg';
import MexicanFeista from '../assets/mexicanfeistapizza.jpg';
import Margherita from '../assets/margapizza.jpg';
import AmericanCheesy from '../assets/americsancheesypizza.jpg';
import M1 from '../assets/beef tacos.webp';
import M2 from '../assets/m2-Pozole-.webp';
import M3 from '../assets/m3-beeftacos.webp';
import M4 from '../assets/m4-tostados.webp';
import M5 from '../assets/m5-Chiles-en-nogada-2e5e44c.webp';
import M6 from '../assets/m6-grilled-corn-with-chilli-mayonnaise-coriander-and-feta-dc80ef9.webp';
import M7 from '../assets/m7-Chicken-bean-enchiladas-e7fabb3.webp';
import M8 from '../assets/m8-Mole-1ba1599.webp';
import M9 from '../assets/m9-Guacamole-48952eb.webp';
import M10 from '../assets/m10-tamales.webp';
import D1 from '../assets/d1-cake.jpg';
import D2 from '../assets/d2Cookies-min.jpg';
import D3 from '../assets/d3Biscuits-min.jpg';
import D4 from '../assets/d4Pastries-min.jpg';
import D5 from '../assets/d5Candies-min.jpg';
import D6 from '../assets/d6Pudding-min.jpg';
import D7 from '../assets/d7Deep-fried-min.jpg';
import D8 from '../assets/d8ice-Cream-min.jpg';
import D9 from '../assets/d9Gelatin-min.jpg';
import D10 from '../assets/d10self-saucing-chocolate-pudding-14262-1.jpg';
const AllDishes = [

    { id: "D1", name: 'Cake', price: 11.99, image: D1 },
    { id: "D2", name: 'Cookies', price: 5.99, image: D2 },
    { id: "D3", name: 'Biscuits', price: 9.99, image: D3 },
    { id: "D4", name: 'Pastries', price: 12.99, image: D4 },
    { id: "D5", name: 'Candies', price: 8.99, image: D5 },
    { id: "D6", name: 'Pudding', price: 10.99, image: D6 },
    { id: "D7", name: 'Deep Fried Min', price: 7.99, image: D7 },
    { id: "D8", name: 'Ice Cream', price: 9.99, image: D8 },
    { id: "D9", name: 'Chocolate Pudding', price: 10.99, image: D9 },
    { id: "D10", name: 'Gelatin', price: 6.99, image: D10 },
    { id: "M1", name: 'Beef Tacos', price: 11.99, image: M1 },
    { id: "M2", name: 'Pozole', price: 5.99, image: M2 },
    { id: "M3", name: 'Tacos', price: 9.99, image: M3 },
    { id: "M4", name: 'Tostados', price: 12.99, image: M4 },
    { id: "M5", name: 'Chiles en Nogada', price: 8.99, image: M5 },
    { id: "M6", name: 'Grilled Corn', price: 10.99, image: M6 },
    { id: "M7", name: 'Enchiladas', price: 7.99, image: M7 },
    { id: "M8", name: 'Mole', price: 9.99, image: M8 },
    { id: "M9", name: 'Guacamole', price: 10.99, image: M9 },
    { id: "M10", name: 'Tamales', price: 6.99, image: M10 },
    { id: "P1", name: 'BarBeque', price: 11.99, image: BBQ },
    { id: "P2", name: 'Schezwan', price: 5.99, image: Schezwan },
    { id: "P3", name: 'Tandoori Paneer', price: 9.99, image: TandooriPaneer },
    { id: "P4", name: 'Chicken Tikka', price: 12.99, image: ChickenTikka },
    { id: "P5", name: 'Veggie Supreme', price: 8.99, image: VeggieSupreme },
    { id: "P6", name: 'Murg Makhini', price: 10.99, image: MurgMakhini },
    { id: "P7", name: 'Cheesy Mushroom', price: 7.99, image: CheesyMushrrom },
    { id: "P8", name: 'Tandoori', price: 9.99, image: Tandoori },
    { id: "P9", name: 'Mexican Feista', price: 10.99, image: MexicanFeista },
    { id: "P10", name: 'Margherita', price: 6.99, image: Margherita },
    { id: "P11", name: 'American Cheesy', price: 8.99, image: AmericanCheesy },
    { id: "R1", name: 'Paneer Roll', price: 11.99, image: Roll1 },
    { id: "R2", name: 'Chicken Roll', price: 5.99, image: Roll2 },
    { id: "R3", name: 'Veg Roll', price: 9.99, image: Roll3 },
    { id: "R4", name: 'Mt Roll', price: 12.99, image: Roll4 },
    { id: "R5", name: 'Mutton Roll', price: 8.99, image: Roll5 },
    { id: "R6", name: 'Chowmein Roll', price: 10.99, image: Roll6 },
    { id: "R7", name: 'Spring Roll', price: 7.99, image: Roll7 },
    { id:"R8", name: 'Sc Roll', price: 9.99, image: Roll8 },
    { id: "R9", name: 'Paneer Roll', price: 10.99, image: Roll9 },
    { id: "S1", name: 'Tossed', price: 11.99, image: S1 },
    { id: "S2", name: 'Caesar', price: 5.99, image: S2 },
    { id: "S3", name: 'Leafy Green', price: 9.99, image: S3 },
    { id: "S4", name: 'Greek', price: 12.99, image: S4 },
    { id: "S5", name: 'Fatoush', price: 8.99, image: S5 },
    { id: "S6", name: 'Nicoise', price: 10.99, image: S6 },
    { id: "S7", name: 'Chicken Salad', price: 7.99, image: S7 },
    { id: "S8", name: 'Tandoori', price: 9.99, image: S8 },
  
    
  ];
  
  export default AllDishes;
  