import React from "react";

export const Table = ({ data, history }) => {
  const renderCard = () => {
    const toUserDetailsPage = (id) => {
      const userId = id;
      if (!userId) {
        return;
      }
      history.push(
        {
          pathname: `/${userId}`,
        },
        data.find((data) => data.id === userId)
      );
    };

    return (
      <div style={{ marginTop: "100px", width: "100%" }}>
        <div className="row-header">
          <p className="itemList">Name</p>
          <p className="itemList">Email</p>
          <p className="itemList">City </p>
          <p className="itemList">Country </p>
        </div>
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <div
                className="table-container"
                onClick={(event) => toUserDetailsPage(item.id)}
                key={item.id}
                id={item.id}
                style={{ zIndex: 999 }}
              >
                <p className="itemList" id={item.id}>
                  {item.contact_persons[0].name}
                </p>
                <p className="itemList">{item.contact_persons[0].email}</p>
                <p className="itemList">{item.city} </p>
                <p className="itemList">{item.country} </p>
              </div>
            );
          })
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Item not found, please search again</p>
          </div>
        )}
      </div>
    );
  };

  return <div className="table-layout">{renderCard()}</div>;
};
