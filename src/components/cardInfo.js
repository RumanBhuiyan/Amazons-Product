const cards = [
  {
    prodId: 1,
    productUrl:
      "https://www.amazon.com/Music-Alley-String-Classical-MA-51/dp/B002S0NK48/ref=sr_1_9?dchild=1&keywords=guitar&qid=1616828212&sr=8-9",
    productName: "Junior Classical Guitar (Pink)",
    price: (36.99 * 84.58).toFixed(2) + " tk",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/810q6AcQxBL._AC_SL1500_.jpg",
  },
  {
    prodId: 2,
    productUrl:
      "https://www.amazon.com/Ibanez-AEWC400-Transparent-Black-Sunburst/dp/B0796PSS5G/ref=sr_1_10?dchild=1&keywords=guitar&qid=1616828212&sr=8-10",
    productName: "Acoustic-Electric Guitar",
    price: (36.99 * 84.58).toFixed(2) + " tk",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61gOVJD1ySL._AC_SL1200_.jpg",
  },
  {
    prodId: 3,
    productUrl:
      "https://www.amazon.com/JMFinger-Beginner-Classical-Guitar-Inch/dp/B0876NJ33W/ref=sr_1_17?dchild=1&keywords=guitar&qid=1616828212&sr=8-17",
    productName: "Classical Guitar Nylon Strings",
    price: (72.25 * 84.58).toFixed(2) + " tk",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61DHhcN8pdL._AC_SL1001_.jpg",
  },
  {
    prodId: 4,
    productUrl:
      "https://www.amazon.com/AmazonBasics-Soprano-Ukulele-Bundle-Strings/dp/B07QLQTZ7W/ref=pd_pbp13n_hpb_sims_4?pd_rd_w=W4abH&pf_rd_p=a0aefcc4-048a-468d-a4bb-24a7e1d03f86&pf_rd_r=HP4786RY7NT3ES290K6D&pd_rd_r=0936b0e4-5390-4373-8744-df4d758e9580&pd_rd_wg=osdrH&pd_rd_i=B07QLQTZ7W&psc=1",
    productName: "Soprano Ukulele Bundle",
    price: (52.64 * 84.58).toFixed(2) + " tk",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81ngKbY0VBL._AC_SL1500_.jpg",
  },
  {
    prodId: 5,
    productUrl:
      "https://www.amazon.com/Soprano-Ukulele-Starter-Songbook-Digital/dp/B07677SJKB/ref=sr_1_26_sspa?dchild=1&keywords=guitar&qid=1616828212&sr=8-26-spons&psc=1&smid=A6MDWQZDP001L&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWDdUREtRUTBPMllTJmVuY3J5cHRlZElkPUEwMDYzNjIyMUhQUFRGOEgxTkU3VSZlbmNyeXB0ZWRBZElkPUEwNjE3Mzg2MUdKRkZLTUpXTVVPOCZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    productName: "Soprano Ukulele Songbook",
    price: (39.99 * 84.58).toFixed(2) + " tk",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61Q3z%2BznnML._AC_SL1001_.jpg",
  },
  {
    prodId: 6,
    productUrl:
      "https://www.amazon.com/Loog-Acoustic-Guitar-Children-Beginners/dp/B072B9V2KB/ref=sr_1_40?dchild=1&keywords=guitar&qid=1616828212&sr=8-40",
    productName: "Loog Mini Acoustic Guitar(Red)",
    price: (79.0 * 84.58).toFixed(2) + " tk",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51yM6ZxbFvL._AC_SL1280_.jpg",
  },
  {
    prodId: 7,
    productUrl:
      "https://www.amazon.com/Ibanez-Single-Cutaway-12-String-Acoustic-Electric-Sunburst/dp/B08TYXBM8N/ref=sr_1_43?dchild=1&keywords=guitar&qid=1616828212&sr=8-43",
    productName: "Acoustic-Electric Guitar",
    price: (299.99 * 84.58).toFixed(2) + " tk",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81dRro-w8YL._AC_SL1500_.jpg",
  },
  {
    prodId: 8,
    productUrl:
      "https://www.amazon.com/Loog-Pro-VI-Acoustic-Green/dp/B08968C7TY/ref=sr_1_47?dchild=1&keywords=guitar&qid=1616828212&sr=8-47",
    productName: "Loog Pro VI Acoustic - Green",
    price: (149.0 * 84.58).toFixed(2) + " tk",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61GpDW4F1BL._AC_SL1500_.jpg",
  },
  {
    prodId: 9,
    productUrl:
      "https://www.amazon.com/Martin-Smith-Acoustic-Strings-Lessons/dp/B078LY6H2Q/ref=sr_1_45?dchild=1&keywords=guitar&qid=1616828212&sr=8-45",
    productName: "Martin Smith Acoustic Guitar",
    price: (63.77 * 84.58).toFixed(2) + " tk",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81rz7bMqBTL._AC_SL1500_.jpg",
  },
  {
    prodId: 10,
    productUrl:
      "https://www.amazon.com/Loog-Mini-Electric-Guitar-Kids/dp/B08LQDDM3G/ref=sr_1_7?dchild=1&keywords=electric+guitar&qid=1616829841&sr=8-7",
    productName: "Loog Mini Electric Guitar",
    price: (149.0 * 84.58).toFixed(2) + " tk",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61Jw4rpdn1L._AC_SL1500_.jpg",
  },
];

export default cards;
