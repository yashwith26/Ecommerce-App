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
    image: "https://assets.ajio.com/medias/sys_master/root/20230418/eRdu/643e955a711cf97ba72fba0a/-473Wx593H-466070858-black-MODEL2.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description: "",
    image: "https://assets.ajio.com/medias/sys_master/root/20230321/NWTC/6418dd6cf997dde6f40fd064/-473Wx593H-465679345-navy-MODEL.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description: "",
    image: "https://assets.ajio.com/medias/sys_master/root/20230221/rGBf/63f475aaf997dde6f4b5ea07/-473Wx593H-463873437-multi-MODEL.jpg",
  },
];