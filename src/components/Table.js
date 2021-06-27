import React from "react";
import { Card } from "./Card";

export const Table = ({ data }) => {
  const renderCard = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.contact_persons[0].name}
              logo={item.logo}
            />
          );
        })}
      </div>
    );
  };

  return <div className="table-container">{renderCard()}</div>;
};
