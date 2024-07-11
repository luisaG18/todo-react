import { useEffect, useState } from "react";
import "./App.css";
import { AddItem } from "./components/AddItem";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState([]);
  const [itemsChecked, setItemsChecked] = useState([]);

  useEffect(() => {
    const initialValues = JSON.parse(localStorage.getItem("inputValue"));
    const initialValuesChecked = JSON.parse(
      localStorage.getItem("inputValueChecked")
    );
    const filteredItems = initialValues?.filter(
      (item) => item != initialValuesChecked
    );

    if (filteredItems) {
      setItems(filteredItems);
    }
    if (initialValuesChecked) {
      setItemsChecked(initialValuesChecked);
    }
  }, []);

  const handleAddItem = (item) => {
    const newItems = [...items];
    newItems.push(item);
    setItems(newItems);
    localStorage.setItem("inputValue", JSON.stringify(newItems));
  };

  const handleItemChecked = (itemChecked) => {
    const newItemsChecked = [...itemsChecked];
    newItemsChecked.push(itemChecked);
    setItemsChecked(newItemsChecked);
    const itemsFilter = items.filter((item) => item != itemChecked);
    setItems(itemsFilter);
    localStorage.setItem("inputValueChecked", JSON.stringify(newItemsChecked));
    localStorage.setItem("inputValue", JSON.stringify(itemsFilter));
  };

  return (
    <>
      <AddItem handleAddItem={handleAddItem} />
      <h3>TO DO</h3>
      <div className="item">
        {items.map((item, index) => (
          <Item
            key={index}
            item={item}
            checked={false}
            handleItemChecked={handleItemChecked}
          />
        ))}
      </div>
      <h3>Tareas completadas</h3>
      <div className="item">
        {itemsChecked.map((itemChecked, index) => (
          <Item
            key={index}
            item={itemChecked}
            handleItemChecked={handleItemChecked}
            checked={true}
          />
        ))}
      </div>
    </>
  );
}

export default App;
