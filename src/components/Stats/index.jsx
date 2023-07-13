export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="footer">
        <p className="text-center">Please add some items into your list</p>
      </footer>
    );
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="footer">
      <p className="text-center">
        {`     You have ${totalItems} items on your list and you've already packed ${packedItems} items. (${percentage}%)`}
      </p>
    </footer>
  );
}
