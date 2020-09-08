import React from "react";
import { Link } from "react-router-dom";

const patientComponent = (props) => {
  return (
    <div>
      <p>
        Last Name:{props.lastName}
        <br />
        First Name:{props.firstName}
        <br />
        Date of Birth:{props.dateOfBirth}
        <br />
        ID:{props.id}
      </p>
      <Link to={`/person/${props.id}`}>
        <button type="submit">Show Details</button>
      </Link>
    </div>
  );
};

export default patientComponent;
