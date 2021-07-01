import React from "react";
import { ItemNotFound } from "./ItemNotFound";

export const Table = ({ data, history, searchValue }) => {
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
    <main className="table-layout">
      <div className="table-container-main">
        <section className="row-header">
          <p className="itemList">Name</p>
          <p className="itemList email">Email</p>
          <p className="itemList">City </p>
          <p className="itemList">Country </p>
        </section>
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <section
                className="table-content-container"
                onClick={() => toUserDetailsPage(item.id)}
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
              </section>
            );
          })
        ) : (
          <ItemNotFound />
        )}
      </div>
    </main>
  );
};
