import { useState } from "react";

function ChildList({ items, onAdd, onDelete }) {
  const [val, setVal] = useState("");
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => onDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
      <input value={val} onChange={(e) => setVal(e.target.value)} placeholder="New item" />
      <button onClick={() => { onAdd(val); setVal(""); }}>Add</button>
    </div>
  );
}

function ItemList() {
  const [items, setItems] = useState(["Apple", "Banana"]);
  const add = (val) => { if (val.trim()) setItems([...items, val]); };
  const del = (i) => setItems(items.filter((_, idx) => idx !== i));
  return <ChildList items={items} onAdd={add} onDelete={del} />;
}

export default ItemList;