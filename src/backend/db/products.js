import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

// export const products = [
//   {
//     _id: uuid(),
//     title: "You Can WIN",
//     author: "Shiv Khera",
//     price: "5000",
//     categoryName: "non-fiction",
//   },
//   {
//     _id: uuid(),
//     title: "You are Winner",
//     author: "Junaid Qureshi",
//     price: "3000",
//     categoryName: "horror",
//   },
//   {
//     _id: uuid(),
//     title: "Think and Grow Rich",
//     author: "Shiv Khera",
//     price: "1000",
//     categoryName: "fiction",
//   },
// ];


export const products = [
  {
    _id: uuid(),
    image:
      'https://assets.ajio.com/medias/sys_master/root/20220810/IFWX/62f2dd6faeb26921afd91a8c/-473Wx593H-464795292-pink-MODEL.jpg  ',
    category: 'Men',
    rating: '4.3',
    size: 'L',
    description: 'DILLINGER Cotton Shirt with Patch Pocket',
    title: 'DILLINGER Cotton Shirt',
    trending: true,
    original_price: '1999',
    price: '700',
    delivery_time: '3',
    reviews: '1.9k',
    in_stock: true,
  },
  {
    _id: uuid(),
    title: 'Boys Printed Kurta',
    original_price: '1999',
    description: 'Cream-Coloured printed kurta with pyjamas Cream-Coloured straight knee length kurta, has a mandarin collar, long sleeves, straight hem, side slits Cream-Coloured Printed pyjamas, has elasticated waistband, slip-on closure',
    price: '759',
    rating: '4.1  ',
    size: 'M',
    image:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/20/108ebab1-4dd9-4b31-92bd-d15c1eaf4a851600551515102-1.jpg',
    category: 'Kids',
    trending: true,
    reviews: '1.5k',
    in_stock: true,
    delivery_time: '2',
  },
  {
    _id: uuid(),
    image:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/20470294/2023/5/12/c6698a36-5c2d-4de2-9c2e-5904c558a8c81683883186905-ADIDAS-Originals-Men-Jackets-91683883186300-1.jpg',
    category: 'Men',
    rating: '4.8',
    size: 'S',
    description: 'Slim fit Two-way full zip with stand-up collar Side zip pocket Ribbed cuffs and hem Warranty: 3 months from the date of purchase against manufacturing defects Warranty provided by brand/manufacturer',
    title: 'ADIDAS Originals',
    trending: false,
    original_price: '4999',
    price: '3990',
    delivery_time: '6',
    reviews: '799',
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19427268/2023/5/30/d6719339-3b87-440b-a4fe-76142b8fbe491685425288603ANDMulticolouredFloralMaxiDress1.jpg',
    category: 'Women',
    rating: '4.4',
    size: 'L',
    description:
      'Multicoloured floral print maxi dress Shoulder straps Sleeveless, shoulder straps Maxi length in flared hem',
    title: 'Multicoloured Maxi Dress',
    trending: true,
    original_price: '3899',
    price: '2339',
    delivery_time: '4',
    reviews: '55',
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19182408/2022/11/29/fbaaa8dc-8318-4f7e-b597-2ac093e3b1ca1669716916092-US-Polo-Assn-Denim-Co-Men-Tshirts-2351669716915612-3.jpg',
    category: 'Men',
    rating: '4.0',
    size: 'XXL',
    description: 'U S Polo Assn Denim Co Men Yellow & Navy Blue Pure Cotton Brand Logo Printed T-shirt',
    title: 'U S Polo Casual Shirt',
    trending: true,
    original_price: '1499',
    price: '899',
    delivery_time: '3',
    reviews: '1.8k',
    in_stock: true,
  },
  {
    _id: uuid(),
    title: 'H&M Boys Cotton T-shirt',
    original_price: '1999',
    description: 'T-shirts in soft cotton jersey with a ribbed trim around the neckline.',
    price: '1999',
    rating: '4.5',
    size: 'S',
    image:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19409632/2022/11/22/94f23a7e-92e1-4650-acd9-94194b59e7801669096332349-HM-Boys-3-pack-Cotton-T-shirts-3241669096332039-2.jpg',
    category: 'Kids',
    trending: true,
    reviews: '1.5k',
    in_stock: false,
    delivery_time: '7',
  },
  {
    _id: uuid(),
    image:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17669442/2022/4/8/68782273-debf-4ac3-85b4-1ab9cdd9e7411649397188119-HERENOW-Women-Tops-2331649397187657-1.jpg',
    category: 'Women',
    rating: '4.6',
    size: 'L',
    description:
      'Women Olive Green & Black Print Mandarin Collar Roll-Up Sleeves Top',
    title: 'Collar Roll-Up Sleeves Top',
    trending: true,
    original_price: '559',
    price: '1499',
    delivery_time: '3',
    reviews: '2.4k',
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18415680/2022/5/25/c303eb58-ad57-482e-933c-c1fb140403d11653469018972t-baseRoyalBlueNylonRibstopSolidFullSleeveRainWearJacket1.jpg',
    category: 'Men',
    rating: '4.3',
    size: 'M',
    description:
      'Royal-blue solid rain jacket, has a self-attached hood that comes with a drawstring toggle and cord lock stopper with the front closure using snap buttons and a placket covering the zipper with velcro closure and long sleeves',
    title: 'Men Ribstop Rain Jacket',
    trending: false,
    original_price: '2299',
    price: '1609',
    delivery_time: '3',
    reviews: '17',
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13901756/2022/5/10/016438e0-e11f-4022-928c-fd8286b0cd221652163797752-Ishin-Off-White-Self-Design-Fit-and-Flare-Dress-816521637971-1.jpg',
    category: 'Women',
    rating: '3.5',
    size: 'L',
    description: 'Off white ethnic motifs self design fit & flare dress V-neck Three-quarter, bell sleeve Gathered or pleated detail Above knee length in flared hem',
    title: 'White Ethnic Motifs Dress',
    trending: false,
    original_price: '4399',
    price: '1671',
    delivery_time: '3',
    reviews: '3.5K',
    in_stock: true,
  },
  {
    _id: uuid(),
    title: 'Boys Pure Cotton T-shirt',
    original_price: '1799',
    description:
      'HERE&NOW - Boys Printed Pure Cotton Casual Shirt',
    price: '1349',
    rating: '3.2',
    size: 'M',
    image:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/21090688/2023/5/17/26cc995d-baae-4cba-89f8-2ad35205d5a71684303111501TommyHilfigerBoysBrandLogoColourblockedPureCottonT-shirt1.jpg',
    category: 'Kids',
    trending: true,
    reviews: '75',
    in_stock: true,
    delivery_time: '3',
  },
  {
    _id: uuid(),
    image:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15119160/2021/10/5/c3a31892-2cbe-4526-acc9-cf31d5e9c5f31633433547389-Puma-Men-Sweatshirts-951633433546876-1.jpg',
    category: 'Men',
    rating: '4.8',
    size: 'M',
    description: 'Contains Recycled Material: Made with recycled fibres. One of PUMA answers to reduce its environmental impact.',
    title: 'Men Hooded Sweatshirt',
    trending: false,
    original_price: '2999',
    price: '1649',
    delivery_time: '5',
    reviews: '5.6k',
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/21932486/2023/2/11/efc62a95-d638-48c6-8125-1dc1390b63441676082604812SatraniWomenCoralPinkSilkBlendJacquardSaree1.jpg',
    category: 'Women',
    rating: '4.2',
    size: 'S',
    description: 'Pink and gold-toned banarasi saree Ethnic Motifs woven design saree with woven design border Has zari detail',
    title: 'Woven Design Zari Banarasi Saree',
    trending: false,
    original_price: '4298',
    price: '2498',
    delivery_time: '4',
    reviews: '200',
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      'https://res.cloudinary.com/ddqytua2y/image/upload/v1685648717/E-commerce-assets/48a79326-e9a7-430f-b562-3365211dbfff1612851254843TopsVeroModaWomenSweatshirtsVeroModaWomenSweatersVeroModaWom1_xaqsrf.jpg',
    category: 'Women',
    rating: '3.5',
    size: 'S',
    description: 'Vero Moda - Women Black Self Design Sheer Bell Sleeves A-Line Top',
    title: 'Bell Sleeves A-Line Top',
    trending: false,
    original_price: '1998',
    price: '998',
    delivery_time: '4',
    reviews: '200',
    in_stock: true,
  },
  {
    _id: uuid(),
    title: 'Sporty Jacket',
    description: 'ADIDAS Originals - Men Green FIREBIRD TRACK Sporty Jacket',
    original_price: '3999',
    price: '2604',
    rating: '4',
    size: 'M',
    image:
      'https://res.cloudinary.com/ddqytua2y/image/upload/v1685648819/E-commerce-assets/92c9ac79-11ba-4f94-bcdd-75e82990c0c41674639043587ADIDASOriginalsMenGreenFIREBIRDTRACKSportyJacket1_zrm8ji.jpg',
    category: 'Men',
    trending: false,
    delivery_time: '10',
    reviews: '1000',
    in_stock: false,
  },
];