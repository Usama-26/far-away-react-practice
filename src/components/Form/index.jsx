import { useState } from "react";

export default function Form({ onAddItem }) {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemName, setItemName] = useState("");

  const handleQuantityChange = (e) => {
    setItemQuantity((quantity) => (quantity = e.target.value));
  };
  const handleItemNameChange = (e) => {
    setItemName((name) => (name = e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName) return;
    const newItem = {
      id: Date.now(),
      name: itemName,
      quantity: itemQuantity,
      packed: false,
    };

    onAddItem(newItem);

    setItemName("");
    setItemQuantity(1);
  };
  return (
    <form action="" className="add-form">
      <div>
        {" "}
        <label htmlFor="quantity" className="quantity-label">
          Select Quantity
        </label>
        <select
          name="quantity"
          id="quantity"
          onChange={handleQuantityChange}
          className="quantity-selectbox"
          value={itemQuantity}
        >
          {Array.from({ length: 20 }, (_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="itemName" className="item-name-label">
          Item Name
        </label>
        <input
          type="text"
          name="item-name"
          id="itemName"
          className="item-name"
          value={itemName}
          onChange={handleItemNameChange}
        />
      </div>

      <button onClick={handleSubmit} className="add-item-button">
        Add
      </button>
    </form>
  );
}
