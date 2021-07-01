import React, { useEffect } from "react";
import { Button } from "./Button";

const UserDetails = ({ location, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Button onClick={() => history.goBack()}>Back</Button>
      <section className="user-details-upper-card">
        <p className="user-details-title">{personalName}</p>
        <img className="user-details-logo" src={logo} alt="" />
      </section>
      <section className="user-details-lower-card">
        <div className="lh15">
          <p>Personal email: {personalEmail}</p>
          <p>Personal phone : {personalPhone} </p>
          <p>Country: {country}</p>
          <p>City: {city}</p>
          <p>Street: {street}</p>
          <p>Zip code: {zip_code}</p>
        </div>
        <div className="lh15">
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
