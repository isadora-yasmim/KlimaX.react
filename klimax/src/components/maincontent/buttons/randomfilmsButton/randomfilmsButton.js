import React from "react";
import "./randomfilmsButton.css";

function RandomFilmsButton() {
  return (
    <div className="randomfilmsButton">
      <div className="logoaleatorio"></div>
      <img
        src="https://i.ibb.co/7GtKkQs/aleatorio-icon.png"
        alt="Filmes Aleatórios"
        className="logo"
      />
    </div>
  );
}

export default RandomFilmsButton;