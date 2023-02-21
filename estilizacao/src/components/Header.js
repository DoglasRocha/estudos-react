import React from "react";
import Logo from "./imgs/ferrari-logo.png";

export default function Header() {
  return (
    <header>
      <img src={Logo} />
      <h1>Ferrari</h1>
    </header>
  );
}
