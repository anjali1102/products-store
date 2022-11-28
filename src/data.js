import shoe from "./assets/shoe.jpg";
import shoe2 from "./assets/shoe2.png";
import { v4 as uuidv4 } from "uuid";

export const data = [
  {
    id: 1,
    _id: uuidv4(),
    name: "Wild Rider Layers Unisex Sneakers",
    price: 2000,
    image: shoe,
    about:
      "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family. We've layered a rich mix of premium leather, suede and hairy suede onto a nylon upper to create texture and a raw edgy look that is pure street. The IMEVA midsole and rubber outsole ensure combined lightweight comfort and great traction to take you forward, further and faster through your day and beyond.",
    quantity: 1,
    color: "white",
    type: "sneakers",
    rating: 1,
  },
  {
    id: 2,
    _id: uuidv4(),
    name: "Mercedes Kart Cat-X Tech Unisex Sneakers",
    price: 6000,
    image: shoe2,
    about:
      "Premium material and tech features are given a branded boost from German engineering. The Mercedes Kart Cat-X Tech Unisex Sneakers areleant style and esteem by Mercedes-AMG Petronas Motorsport. The piece rises to the occasion with an all-leather upper.",
    quantity: 1,
    color: "black",
    type: "loafers",
    rating: 1,
  },
  {
    id: 3,
    _id: uuidv4(),
    name: "Jako Slip-On Men's Shoes",
    price: 2500,
    image: shoe,
    about:
      "The Jako Slip-On Men's Shoes are perfect for a laceless running style. Lightweight and styled for everyday wear, they feature a breathable and durable mesh upper. Layered cushioning adds comfort that goes the distance.",
    quantity: 1,
    color: "black",
    type: "sneakers",
    rating: 1,
  },
  {
    id: 4,
    _id: uuidv4(),
    name: "PUMA Serve Pro Lite Unisex shoes",
    price: 2000,
    image: shoe2,
    about:
      "Catering to the growing consumer expectation for casual, everyday comfort, the Serve Pro Lite Trainers feature shock-absorbing support for lightweight luxury.",
    quantity: 1,
    color: "white",
    type: "loafers",
    rating: 1,
  },
  {
    id: 5,
    _id: uuidv4(),
    name: "Electron E Unisex Shoes",
    price: 2500,
    image: shoe,
    about:
      "There's more to the Electron E Trainers than meets the eye. Its visible technology highlights fantastic features like a breathable mesh upper, synthetic quarter panels for support and a bold aesthetic that's both fun and futuristic. The elastic band on the heel provides extra comfort.",
    quantity: 1,
    color: "red",
    type: "sneakers",
    rating: 2,
  },
  {
    id: 6,
    _id: uuidv4(),
    name: "one8 Virat Kohli Basket Classice Unisex Sneakers",
    price: 6000,
    image: shoe2,
    about:
      "This one is for the collectors,connoisseur & extreme uber cool, the one8 Virat Kohli Basket Classic one8 V3 pays homage to the illustrious career of the legend himslef",
    quantity: 1,
    color: "white",
    type: "loafers",
    rating: 2,
  },
];
