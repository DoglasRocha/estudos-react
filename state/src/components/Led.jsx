import React, { useState } from "react";
import GreenLed from "./imgs/led_green_black.png";
import RedLed from "./imgs/led_red_black.png";

export default function Led(props) {
  return (
    <>
      <img
        style={{ width: "200px" }}
        src={props.isOn ? GreenLed : RedLed}
        alt="Led de cor variada"
      />
      <button
        onClick={() => {
          props.isOn ? props.setOn(false) : props.setOn(true);
        }}
      >
        Trocar cor para {props.isOn ? "Vermelho" : "Verde"}
      </button>
    </>
  );
}
