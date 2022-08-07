import React from "react";

export function FilterForm(props) {
  const onPriceInputChange = (e) => {
    props.onPriceInputChange(e.target.name, parseFloat(e.target.value) || 0);
  };

  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        value={props.priceFrom}
        onChange={onPriceInputChange}
        placeholder="Price from..."
      />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        value={props.priceTo}
        onChange={onPriceInputChange}
        placeholder="Price to..."
      />
    </div>
  );
}
