import React from "react";

export function ToggleColumns(props) {
  const onCheckboxClick = (e) => {
    console.log(e.target.value);
    props.onCheckboxClick(e.target.name, e.target.checked);
  };

  return (
    <div className="toggle-columns">
      {Object.keys(props.columns).map((column, index) => {
        return (
          <div key={index}>
            <label htmlFor={column}>{column}</label>
            <input
              id={column}
              name={column}
              type="checkbox"
              checked={props.columns[column]}
              onChange={onCheckboxClick}
            />
          </div>
        );
      })}
    </div>
  );
}
