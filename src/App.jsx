import { useState } from "react";
import "./App.css";
import { AddItem } from "./components/AddItem";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    const newItems = [...items];
    newItems.push(item);
    setItems(newItems);
  };

  return (
    <>
      <AddItem handleAddItem={handleAddItem} />
      <h3>TO DO</h3>
      <div className="item">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
      <h3>Tareas completadas</h3>
      <Item />
    </>
  );
}

export default App;
