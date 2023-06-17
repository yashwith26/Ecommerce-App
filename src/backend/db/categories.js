import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description: "",
    image: "assets/images/men-category-img.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description: "",
    image: "assets/images/women-category-img.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description: "",
    image: "assets/images/kids-category-img.jpg",
  },
];