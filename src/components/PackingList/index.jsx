import { useState } from "react";
import Item from "../Item";

export default function PackingList({
  items,
  onToggleItem,
  onDeleteItem,
  onSetItems,
}) {
  const [sortBy, setSoryBy] = useState("input");
  let sortedItems;
  const handleSortItems = (e) => {
    setSoryBy(e.target.value);
  };
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  if (sortBy === "description")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <div className="items-container">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            item={item}
          />
        ))}
      </div>
      <div className="actions">
        <select name="sort" id="sort" value={sortBy} onChange={handleSortItems}>
          <option value="input">Sort by Input Order</option>
          <option value="packed">Sort by Packed Status</option>
          <option value="description">Sort by Name </option>
        </select>
        <button onClick={() => onSetItems([])}>Clear List</button>
      </div>
    </>
  );
}
