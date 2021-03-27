import React from "react";
import { ProductCard } from "react-ui-cards";
import cards from "./cardInfo";

function AllCards() {
  return (
    <div className="row justify-content-center">
      {cards.map(({ prodId, productUrl, productName, price, imageUrl }) => {
        return (
          <div className="col col-lg-4 col-md-6 col-sm-12" key={prodId}>
            <ProductCard
              productName={productName}
              price={price}
              photos={[imageUrl]}
              url={productUrl}
              buttonText={"Buy Now"}
            />
          </div>
        );
      })}
    </div>
  );
}

export default AllCards;
