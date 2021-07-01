import React from "react";
import { ItemNotFound } from "./ItemNotFound";

export const Table = ({ data, history, searchValue }) => {
  const renderCard = () => {
    const toUserDetailsPage = (id) => {
      const userId = id;
      if (!userId) {
        return;
      }
      history.push(
        {
          pathname: `/userDetails/${userId}`,
        },
        data.find((data) => data.id === userId)
      );
    };

    return (
      <div className="table-container-main">
        <div className="row-header">
          <p className="itemList">Name</p>
          <p className="itemList email">Email</p>
          <p className="itemList">City </p>
          <p className="itemList">Country </p>
        </div>
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <div
                className="table-content-container"
                onClick={(event) => toUserDetailsPage(item.id)}
                key={item.id}
                id={item.id}
                style={{ zIndex: 999 }}
              >
                <p className="itemList" id={item.id}>
                  {item.contact_persons[0].name}
                </p>
                <p className="itemList email">
                  {item.contact_persons[0].email}
                </p>
                <p className="itemList">{item.city} </p>
                <p className="itemList">{item.country} </p>
              </div>
            );
          })
        ) : (
          <ItemNotFound />
        )}
      </div>
    );
  };

  return <div className="table-layout">{renderCard()}</div>;
};
