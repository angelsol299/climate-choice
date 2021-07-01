import React from "react";

export const Button = ({ onClick, children }) => {
  return (
    <div className="back-button" onClick={onClick}>
      <p>{children}</p>
    </div>
  );
};
