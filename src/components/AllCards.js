import React from "react";
import { ProductCard } from "react-ui-cards";
import SearchIcon from "../photos/search2.png";
import { useState } from "react";
import cards from "./cardInfo";

function AllCards() {
  const [isChecked, setisChecked] = useState(false);
  const [filterText, setFilterText] = useState(null);
  let filteredItems = cards.filter(({ productName }) => {
    return productName.toLowerCase().includes(filterText);
  });

  filteredItems = filterText != null ? filteredItems : cards;

  //   const handleSwitchChange = () => {
  //     setisChecked((state) => !state);
  //     if (isChecked) {
  //       filteredItems.sort((a, b) => a.price > b.price);
  //     }
  //     console.log(isChecked);
  //   };

  return (
    <div>
      <div className="searchdiv">
        <img
          src={SearchIcon}
          alt="search"
          style={{ width: "60px", marginTop: "1rem", marginRight: "0.5rem" }}
        />
        <input
          className="searchInput"
          placeholder="Search Product"
          name="search"
          value={filterText}
          spellCheck="false"
          onChange={(e) => setFilterText(e.target.value.toLocaleLowerCase())}
        />
      </div>

      {/* <div className="row checkdiv">
        <input
          type="checkbox"
          //   data-toggle="toggle"
          id="check"
          value={isChecked}
          onClick={handleSwitchChange}
        />
        <p id="checktext">Descending</p>
      </div> */}

      <div className="row justify-content-center">
        {filteredItems.map(
          ({ prodId, productUrl, productName, price, imageUrl }) => {
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
          }
        )}
      </div>
    </div>
  );
}

export default AllCards;
