export type ProductData = {
  id: string;
  name: string;
  price: string;
  image: string;
};

export const MERCHANDISE: ProductData[] = [
  { id: "jersey", name: "Alvion Jersey", price: "₹1,999", image: "/images/merch/jersey.svg" },
  { id: "tee", name: "Alvion T-Shirt", price: "₹999", image: "/images/merch/tshirt.svg" },
  { id: "hoodie", name: "Alvion Hoodie", price: "₹2,499", image: "/images/merch/hoodie.svg" },
  { id: "cap", name: "Alvion Cap", price: "₹799", image: "/images/merch/cap.svg" },
];
