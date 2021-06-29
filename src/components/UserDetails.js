import React from "react";

const UserDetails = ({ location }) => {
  const {
    contact_persons,
    logo,
    description,
    country,
    employee_count,
    name,
    email,
    website,
    street,
    revenue,
    zip_code,
    phone,
  } = location.state;

  const personalName = contact_persons[0].name;
  const personalPhone = contact_persons[0].phone;
  const personalEmail = contact_persons[0].email;

  console.log(location.state);
  return (
    <main className="card-container">
      <section className="upper-card">
        <p className="card-title">{personalName}</p>
        <img className="card-logo" src={logo} alt="" />
      </section>
      <section className="lower-card">
        <div>
          <p>Country: {country}</p>
          <p>Street: {street}</p>
          <p>Zip code: {zip_code}</p>
          <p>Personal phone : {personalPhone} </p>
          <p>Personal email: {personalEmail}</p>
        </div>
        <div>
          <p>Company: {name}</p>
          <p>Company email: {email}</p>
          <p>Company phone: {phone}</p>
          <p>Website: {website}</p>
          <p>Employee number: {employee_count}</p>
        </div>

        <p style={{ lineHeight: "20px" }}>{description}</p>
        <p>Revenue: {revenue}€</p>
      </section>
    </main>
  );
};

export default UserDetails;
