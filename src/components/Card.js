import React from "react";

export const Card = ({ name, logo }) => {
  return (
    <main className="card-container">
      <p className="card-title">{name}</p>
    </main>
  );
};
