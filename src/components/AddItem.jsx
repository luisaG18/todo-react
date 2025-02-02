import "./AddItem.scss";

export function AddItem({ handleAddItem }) {
  const handleClick = () => {
    const newValue = document.getElementById("input-item").value;
    handleAddItem(newValue);
    document.getElementById("input-item").value = "";
  };

  return (
    <div className="container-add-item">
      <input
        className="container-add-item__input"
        placeholder="Agregar item"
        id="input-item"
      />
      <button className="container-add-item__button" onClick={handleClick}>
        +
      </button>
    </div>
  );
}
