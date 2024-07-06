import { useState } from "react";
import "./Item.scss";

export function Item({ item, handleItemChecked, checked }) {
  const [check, setCheck] = useState(false);

  const handleClick = (event) => {
    const newCheck = event.target.checked;
    setCheck(newCheck);
    if (newCheck) {
      handleItemChecked(item);
    }
  };

  return (
    <div className="container-item">
      <input
        type="checkbox"
        className="container-item__checkbox"
        id="item-checkbox"
        onClick={handleClick}
        checked={checked}
        readOnly={checked}
      />
      {!checked ? (
        <span className="container-item__item">{item}</span>
      ) : (
        <span className="container-item__item">
          <del>{item}</del>
        </span>
      )}
    </div>
  );
}
