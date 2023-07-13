import { useState } from "react";
import "./App.css";
import Header from "./components/Header/index";
import Form from "./components/Form/index";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => (items = items.filter((item) => item.id !== id)));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="wrapper">
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onSetItems={setItems}
      />

      <Stats items={items} />
    </div>
  );
}

export default App;
