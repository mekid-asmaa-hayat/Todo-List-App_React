import React, { useState } from "react";
import TodoList from "./Componants/TodoList";
import "./App.css";
import { ClassNames } from "@emotion/react";
import Theme from "./Componants/Theme";

export default function App() {
  return (
    <div
      style={{
        background: "#1b1919ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        direction: "ltr",
        textAlign: "center",
        color: "white", // pour que le texte soit visible sur fond sombre
        flexDirection: "column", // pour que le h1 soit sous la liste
      }}
    >
      <TodoList />
      
    </div>
  );
}



