import React, { useState } from "react";

import products from "../assets/products.json";
import "../styles/Search.css";
import { ToggleColumns } from "./ToggleColumns";
import { ProductList } from "./ProductList";
import { FilterForm } from "./FilterForm";

export function Search() {
  const [price, setPrice] = useState({ priceFrom: "", priceTo: "" });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  const onCheckboxClick = (name, checked) => {
    setColumns({
      ...columns,
      [name]: checked,
    });
  };

  const filterProducts = () => {
    return products.filter(
      (product) =>
        (price.priceFrom === "" || product.price >= price.priceFrom) &&
        (price.priceTo === "" || product.price <= price.priceTo)
    );
  };

  let displayedProducts = filterProducts();
  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange}
      />

      <ToggleColumns onCheckboxClick={onCheckboxClick} columns={columns} />

      <ProductList products={displayedProducts} columns={columns} />
    </div>
  );
}

export default Search;
