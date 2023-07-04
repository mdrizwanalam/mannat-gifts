import React from "react";
import "./Home.scss";
const ListItem = () => {
  let array = [
    {
      name: "Gift Box For Friemd",
      imageUrl:
        "https://www.fnp.com/images/pr/l/v20220706124810/love-for-pastel-carnations-bouquet_1.jpg",
      discountedPrice: 1200,
      originalPrice: 1500,
    },
    {
      name: "A Cup of Wine With Some Gifts",
      imageUrl:
        "https://www.fnp.com/images/pr/l/v20221209121243/personalised-floral-flask-with-temperature-display_1.jpg",
      discountedPrice: 1100,
      originalPrice: 1250,
    },
    {
      name: "Chocholate Surprise Arrangment",
      imageUrl:
        "https://www.fnp.com/images/pr/l/v20230120125023/assorted-chocolates-basket-arrangement_1.jpg",
      discountedPrice: 2500,
      originalPrice: 3000,
    },
    {
      name: "Personalized Black Mug",
      imageUrl:
        "https://www.fnp.com/images/pr/l/v20221102063746/black-mug-personalized_1.jpg",
      discountedPrice: 860,
      originalPrice: 1000,
    },
    {
      name: "Black Forest Cake",
      imageUrl:
        "https://www.fnp.com/images/pr/l/v20221205145048/black-forest-cake-half-kg_1.jpg",
      discountedPrice: 390,
      originalPrice: 500,
    },
    {
      name: "Plant In Glass Jar",
      imageUrl:
        "https://www.fnp.com/images/pr/l/v20230121124031/chamaedorea-plant-in-glass-jar_1.jpg",
      discountedPrice: 1250,
      originalPrice: 1400,
    },
    {
      name: "Wishes Floral Banquet",
      imageUrl:
        "https://www.fnp.com/images/pr/l/v20221109132544/confetti-wishes-floral-bouquet_1.jpg",
      discountedPrice: 1200,
      originalPrice: 1299,
    },
    {
      name: "Quote Personalized Bottle",
      imageUrl:
        "https://www.fnp.com/images/pr/l/v20221211184000/motivating-quote-personalised-bottle_1.jpg",
      discountedPrice: 1480,
      originalPrice: 1500,
    },
    {
      name: "Cool LED Yellow Cushion",
      imageUrl:
        "https://www.fnp.com/images/pr/l/v20221102063748/personalised-cool-yellow-led-cushion_1.jpg",
      discountedPrice: 1900,
      originalPrice: 2000,
    },
    {
      name: "Birthday Special LED Speaker",
      imageUrl:
        "https://www.fnp.com/images/pr/l/v20220926091952/personalised-birthday-special-led-speaker_1.jpg",
      discountedPrice: 2050,
      originalPrice: 2600,
    },
  ];
  return (
    <>
      <div className="card_wrapper">
        {array.map((obj, i) => {
          return (
            <div className="product_item">
              <div className="product_image">
                <figure>
                  {i % 2 == 1 && <img src={obj.imageUrl} alt="shoes" />}
                  {i % 2 == 0 && <img src={obj.imageUrl} alt="shoes" />}
                </figure>
              </div>
              <div className="product_details">
                <div className="product_title">{obj.name}</div>
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

export default ListItem;
