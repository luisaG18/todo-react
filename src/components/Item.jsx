import "./Item.scss";

export function Item({ item }) {
  return (
    <div className="container-item">
      <input type="checkbox" className="container-item__checkbox" />
      <span className="container-item__item">{item}</span>
    </div>
  );
}
