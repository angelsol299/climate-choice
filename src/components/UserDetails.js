import React from "react";

const UserDetails = ({ location, history }) => {
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
    city,
  } = location.state;

  const personalName = contact_persons[0].name;
  const personalPhone = contact_persons[0].phone;
  const personalEmail = contact_persons[0].email;

  return (
    <main className="user-details-container">
      <div className="back-button" onClick={() => history.goBack()}>
        <p>Back</p>
      </div>
      <section className="upper-card">
        <p className="card-title">{personalName}</p>
        <img className="card-logo" src={logo} alt="" />
      </section>
      <section className="lower-card">
        <div>
          <p>Personal email: {personalEmail}</p>
          <p>Personal phone : {personalPhone} </p>
          <p>Country: {country}</p>
          <p>City: {city}</p>
          <p>Street: {street}</p>
          <p>Zip code: {zip_code}</p>
        </div>
        <div>
          <p>Company: {name}</p>
          <p>Company email: {email}</p>
          <p>Company phone: {phone}</p>
          <p>Website: {website}</p>
          <p>Employee number: {employee_count}</p>
        </div>

        <div className="user-details-description">
          <span className="fw500">Description:</span> {description}
        </div>
        <p className="user-details-revenue">Revenue: {revenue}€</p>
      </section>
    </main>
  );
};

export default UserDetails;
