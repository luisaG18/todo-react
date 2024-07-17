import { useState } from "react";
import "./Item.scss";
import { OptionsItem } from "./Options";

export function Item({ item, handleItemChecked, checked }) {
  const [check, setCheck] = useState(false);
  const [options, setOptions] = useState(false);

  const handleChange = (event) => {
    const newCheck = event.target.checked;
    setCheck(newCheck);
    if (newCheck) {
      handleItemChecked(item);
    }
  };

  const handleClick = () => {
    setOptions(true);
  };

  return (
    <div className="container-item">
      <input
        type="checkbox"
        className="container-item__checkbox"
        id="item-checkbox"
        onChange={handleChange}
        checked={checked}
        readOnly={checked}
      />
      <div className="container-items">
        {!checked ? (
          <span className="container-items__item">{item}</span>
        ) : (
          <span className="container-items__item">
            <del>{item}</del>
          </span>
        )}
        <div className="container-items__icon" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </div>
        {options && <OptionsItem />}
      </div>
    </div>
  );
}
