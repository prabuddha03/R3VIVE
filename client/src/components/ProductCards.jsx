import React from "react";
import Card from "./Card";
import Paper_bowl from "/src/assets/Paper_bowl.png";

const ProductCards = () => {
  return (
    <div className="flex flex-row justify-evenly">
      <Card
        title="Paper Bowl"
        price="$000"
        description="Product description"
        image={Paper_bowl}
        tag="#prod_tag"
      />
      <Card
        title="Paper Bowl"
        price="$000"
        description="Product description"
        image={Paper_bowl}
        tag="#prod_tag"
      />
      <Card
        title="Paper Bowl"
        price="$000"
        description="Product description"
        image={Paper_bowl}
        tag="#prod_tag"
      />
      <Card
        title="Paper Bowl"
        price="$000"
        description="Product description"
        image={Paper_bowl}
        tag="#prod_tag"
      />
    </div>
  );
};

export default ProductCards;
