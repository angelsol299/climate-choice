import React from "react";

export const Card = ({ name, logo }) => {
  return (
    <main className="card-container">
      <section className="upper-card">
        <p className="card-title">{name}</p>
        <img className="card-logo" src={logo} alt="" />
      </section>
      <section className="lower-card">
        <div>
          <p>kslajdkljkls</p>
          <p>kslajdkljkls</p>
          <p>kslajdkljkls</p>
          <p>kslajdkljkls</p>
        </div>
        <div>
          <p>kslajdkljkls</p>
          <p>kslajdkljkls</p>
          <p>kslajdkljkls</p>
          <p>kslajdkljkls</p>
        </div>
      </section>
    </main>
  );
};
