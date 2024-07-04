import "./AddItem.scss";

export function AddItem() {
  return (
    <div className="container-add-item">
      <input className="container-add-item__input" placeholder="Agregar item" />
      <button className="container-add-item__button">+</button>
    </div>
  );
}
