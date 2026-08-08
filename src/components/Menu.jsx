// Menu.jsx
import React, { useState } from "react";
import { menuData, categories } from "./MenuData";
import "./menu.css";

function MenuItem({ item, onAdd }) {
  return (
    <tr className="menu-item">
      <td className="item-name">{item.name}</td>
      <td className="item-price">{item.price.toLocaleString()} تومان</td>
      <td>
        {" "}
        <button onClick={() => onAdd(item)}>افزودن</button>
      </td>
    </tr>
  );
}

export default function Menu() {
  const [active, setActive] = useState("shakes");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart((s) => [...s, item]);

  const total = cart.reduce((sum, it) => sum + it.price, 0);

  return (
    <div className="menu-container" dir="rtl">
      <nav className="category-nav  mx-auto ">
        {categories.map((c) => (
          <button
            key={c.id}
            className={c.id === active ? "active" : ""}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </nav>
      <br />

      <section className="items-list">
        <h2>{menuData[active].title}</h2>
        <table style={{width:"100%"}}>
          {menuData[active].items.map((it) => (
            <MenuItem key={it.id} item={it} onAdd={addToCart} />
          ))}
        </table>
      </section>

      <aside className="cart">
        <h3>سبد خرید</h3>
        {cart.length === 0 ? (
          <div>خالی</div>
        ) : (
          <ul>
            {cart.map((it, idx) => (
              <li key={idx}>
                {it.name} — {it.price.toLocaleString()} تومان
              </li>
            ))}
          </ul>
        )}
        <div className="total">مجموع: {total.toLocaleString()} تومان</div>
      </aside>
    </div>
  );
}
