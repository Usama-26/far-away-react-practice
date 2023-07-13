export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <div key={item.id} className="list-item">
      <input
        type="checkbox"
        className="item-checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span className="list-item-quantity">{item.quantity}</span>
      <span
        className="list-item-name"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.name}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        className="item-delete-button"
      >
        ❌
      </button>
    </div>
  );
}
