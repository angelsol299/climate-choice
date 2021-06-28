import React from "react";
import { Card } from "./Card";

export const Table = ({ data }) => {
  const renderCard = () => {
    return (
      <div className="table-container">
        <div>
          <p>name</p>
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
        <div>
          <p>address</p>
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.contact_persons[0].email}
                logo={item.logo}
              />
            );
          })}
        </div>
        <div>
          <p>website</p>
          {data.map((item) => {
            return <Card key={item.id} name={item.website} logo={item.logo} />;
          })}
        </div>
        <div>
          <p>country</p>
          {data.map((item) => {
            return <Card key={item.id} name={item.country} logo={item.logo} />;
          })}
        </div>
      </div>
    );
  };

  return <div className="table-layout">{renderCard()}</div>;
};
