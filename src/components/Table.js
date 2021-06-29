import React from "react";
import { Card } from "./Card";

export const Table = ({ data }) => {
  console.log("====================================");
  console.log({ data });
  console.log("====================================");
  const renderCard = () => {
    const onClick = (event) => {
      console.log("====================================");
      console.log("FIRE CLICK");
      console.log(event.target.id);
    };

    return (
      <div style={{ marginTop: "100px", width: "100%" }}>
        <div className="row-header">
          <p className="itemList">Name</p>
          <p className="itemList">Email</p>
          <p className="itemList">Website </p>
          <p className="itemList">City </p>
          <p className="itemList">Country </p>
        </div>
        {data.map((item) => {
          return (
            <div
              className="table-container"
              onClick={(event) => onClick(event)}
              key={item.id}
              id={item.id}
              style={{ zIndex: 999 }}
            >
              <p className="itemList" id={item.id}>
                {item.contact_persons[0].name}
              </p>
              <p className="itemList">{item.contact_persons[0].email}</p>
              <p className="itemList">{item.website} </p>
              <p className="itemList">{item.city} </p>
              <p className="itemList">{item.country} </p>
            </div>
          );
        })}
      </div>
    );
  };

  return <div className="table-layout">{renderCard()}</div>;
};

{
  /* <div>
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
        </div> */
}
