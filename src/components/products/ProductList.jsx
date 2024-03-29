import { Rating, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  var [data, setData] = useState([]);
  const [value, setValue] = React.useState(2);

  let navigate = useNavigate();

  const array = [
    {
      title: "Gift Box For Friemd",
      url: "https://www.fnp.com/images/pr/l/v20220706124810/love-for-pastel-carnations-bouquet_1.jpg",
      discountedPrice: 1200,
      originalPrice: 1500,
    },
    {
      title: "A Cup of Wine With Some Gifts",
      url: "https://www.fnp.com/images/pr/l/v20221209121243/personalised-floral-flask-with-temperature-display_1.jpg",
      discountedPrice: 1100,
      originalPrice: 1250,
    },
    {
      title: "Gift Box For Friemd",
      url: "https://www.fnp.com/images/pr/l/v20220706124810/love-for-pastel-carnations-bouquet_1.jpg",
      discountedPrice: 1200,
      originalPrice: 1500,
    },
    {
      title: "A Cup of Wine With Some Gifts",
      url: "https://www.fnp.com/images/pr/l/v20221209121243/personalised-floral-flask-with-temperature-display_1.jpg",
      discountedPrice: 1100,
      originalPrice: 1250,
    },
    {
      title: "Chocholate Surprise Arrangment",
      url: "https://www.fnp.com/images/pr/l/v20230120125023/assorted-chocolates-basket-arrangement_1.jpg",
      discountedPrice: 2500,
      originalPrice: 3000,
    },
    {
      title: "Personalized Black Mug",
      url: "https://www.fnp.com/images/pr/l/v20221102063746/black-mug-personalized_1.jpg",
      discountedPrice: 860,
      originalPrice: 1000,
    },
    {
      title: "Black Forest Cake",
      url: "https://www.fnp.com/images/pr/l/v20221205145048/black-forest-cake-half-kg_1.jpg",
      discountedPrice: 390,
      originalPrice: 500,
    },
    {
      title: "Plant In Glass Jar",
      url: "https://www.fnp.com/images/pr/l/v20230121124031/chamaedorea-plant-in-glass-jar_1.jpg",
      discountedPrice: 1250,
      originalPrice: 1400,
    },
    {
      title: "Wishes Floral Banquet",
      url: "https://www.fnp.com/images/pr/l/v20221109132544/confetti-wishes-floral-bouquet_1.jpg",
      discountedPrice: 1200,
      originalPrice: 1299,
    },
    {
      title: "Quote Personalized Bottle",
      url: "https://www.fnp.com/images/pr/l/v20221211184000/motivating-quote-personalised-bottle_1.jpg",
      discountedPrice: 1480,
      originalPrice: 1500,
    },
    {
      title: "Cool LED Yellow Cushion",
      url: "https://www.fnp.com/images/pr/l/v20221102063748/personalised-cool-yellow-led-cushion_1.jpg",
      discountedPrice: 1900,
      originalPrice: 2000,
    },
    {
      title: "Birthday Special LED Speaker",
      url: "https://www.fnp.com/images/pr/l/v20220926091952/personalised-birthday-special-led-speaker_1.jpg",
      discountedPrice: 2050,
      originalPrice: 2600,
    },
  ];

  useEffect(() => {
    callAPI();
  }, [0]);

  const callAPI = async () => {
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
      data = await res.json();
      data = data.slice(0, 50);
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2 className="product_list_header">Best Selling Gifts :</h2>
      <div className="product_list_wrapper container">
        {array.map((obj, i) => {
          return (
            <div
              key={i}
              className="product_item"
              onClick={() => {
                navigate("/products/red-mug-for-wife");
              }}
            >
              <div className="product_image_con_outer">
                <div className="product_image_con_inner">
                  <img
                    src={obj.url}
                    width={100}
                    height={70}
                    alt="mannat logo"
                  />
                </div>
              </div>
              <div className="product_details">
                <div className="product_rating">
                  <Rating size="small"
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <span className="no_reviews_cont">No Reviews</span>
                </div>
                <div className="product_title">{obj.title}</div>
                <span className="product_discounted_price">
                  &#8377;{obj.discountedPrice}
                </span>
                <span className="product_original_price">
                  &#8377;<del>{obj.originalPrice}</del>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProductList;
