import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SinglePerson() {
  const [person, set_person] = useState([]);
  const route_parameters = useParams();
  // console.log("Aaaaaa", route_parameters);
  // console.log("Bbbbb",  match);

  useEffect(() => {
    const patientData = async () => {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${route_parameters.id}`
      );

      set_person(response.data);
      console.log("lol", response.data);
    };

    patientData();
  }, [route_parameters.id]);

  return (
    <div>
      <h3>
        {person.lastName}
        <br />
        {person.firstName}
        <br />
        {person.dateOfBirth}
        <br />
        {person.gender}
        <br />
        {person.email}
        <br />
        {person.phoneNumber}
        <br />
        {person.prescriptions}
        <br />
        {person.id}
      </h3>
    </div>
  );
}
