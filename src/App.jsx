import "./App.css";
import { AddItem } from "./components/AddItem";

function App() {
  return (
    <>
      <AddItem />
      <div>
        <h3>TO DO</h3>
        <div>
          <div>Checkbox</div>
          <span>Tarea</span>
        </div>
      </div>
      <div>
        <h3>Tareas completadas</h3>
        <div>
          <div>Checkbox</div>
          <span>Tarea</span>
        </div>
      </div>
    </>
  );
}

export default App;
