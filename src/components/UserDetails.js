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
          <p>
            <strong>Personal email:</strong> {personalEmail}
          </p>
          <p>
            <strong>Personal phone :</strong> {personalPhone}{" "}
          </p>
          <p>
            <strong>Country:</strong> {country}
          </p>
          <p>
            <strong>City:</strong> {city}
          </p>
          <p>
            <strong>Street:</strong> {street}
          </p>
          <p>
            <strong>Zip code:</strong> {zip_code}
          </p>
        </div>
        <div className="lh15">
          <p>
            <strong>Company: </strong> {name}
          </p>
          <p>
            {" "}
            <strong>Company email:</strong> {email}
          </p>
          <p>
            {" "}
            <strong>Company phone:</strong> {phone}
          </p>
          <p>
            {" "}
            <strong>Website:</strong> {website}
          </p>
          <p>
            {" "}
            <strong>Employee number:</strong> {employee_count}
          </p>
        </div>

        <div className="user-details-description">
          <span className="fw500">Description:</span> {description}
        </div>
        <p className="user-details-revenue">
          Revenue:{" "}
          <span className="user-details-revenue-amount">{revenue}€</span>
        </p>
      </section>
    </main>
  );
};

export default UserDetails;
