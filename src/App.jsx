import { useState } from "react";
import "./App.css";
import { AddItem } from "./components/AddItem";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState([]);
  const [itemsChecked, setItemsChecked] = useState([]);

  const handleAddItem = (item) => {
    const newItems = [...items];
    newItems.push(item);
    setItems(newItems);
  };

  const handleItemChecked = (itemChecked) => {
    const newItemsChecked = [...itemsChecked];
    newItemsChecked.push(itemChecked);
    setItemsChecked(newItemsChecked);
    const itemsFilter = items.filter((item) => item !== itemChecked);
    setItems(itemsFilter);
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
