import React from "react";
import "./index.css";
import { LuShoppingCart } from "react-icons/lu";

export default function Header() {
  return (
    <div className="header">
      <div className="container-header">
        <LuShoppingCart className="iconlogo" />
        <p>Toko Biru</p>
      </div>
    </div>
  );
}
