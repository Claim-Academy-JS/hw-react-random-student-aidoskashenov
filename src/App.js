import React from "react";
import { Display } from "./components";
import "./App.css";
const inputs = [
  {
    htmlFor: "add-student",
    label: "Add",
    placeholder: "Name",
  },
  {
    disabled: true,
    htmlFor: "random-student",
    label: "Random",
    placeholder: "Random",
  },
];

const buttons = [
  {
    buttonText: "Add",

    className: "add-btn",
  },
  {
    buttonText: "Random",

    className: "random-btn",
  },
];

export const App = () => {
  return <Display inputs={inputs} buttons={buttons} />;
};
