import React, { useState, useEffect } from "react";
import axios from "axios";
import Patient from "../components/PatietnComponent";

const DataBaseWithPatients = () => {
  const [patientsList, set_patientsList] = useState([]);
  const [doctorsNames, set_doctorsNames] = useState([]);
  const [sort, set_sort] = useState("all");

  function compare(player_a, player_b) {
    return player_a.lastName.localeCompare(player_b.lastName);
  }

  const sortedPatients = patientsList.sort(compare);
  console.log("serted patients", sortedPatients);

  function onchangeSelect(event) {
    console.log("dostors selected", event.target.value);

    set_sort(event.target.value);
  }

  useEffect(() => {
    const doPatientsFetching = async () => {
      const dataPatients = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      );
      //   console.log("this is data", dataPatients);

      let patientsArray = dataPatients.data;
      set_patientsList(patientsArray);
      console.log(patientsArray);
    };
    doPatientsFetching();

    const doDoctorsFetching = async () => {
      const dataDoctors = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );

      let doctorsArray = dataDoctors.data;
      set_doctorsNames(doctorsArray);

      console.log("this is data too", doctorsArray);
    };
    doDoctorsFetching();
  }, []);

  const filteredPatients = sortedPatients.filter((patient) => {
    return patient.doctorId === parseInt(sort);
  });

  console.log("this ia a patient", filteredPatients);

  return (
    <div>
      <label>
        Choose your dctor:
        <select
          onChange={onchangeSelect}
          value={sort}
          style={{ padding: 15 }}
          name="doctors"
        >
          <option value="all">All</option>
          {doctorsNames.map((doctorData) => {
            return (
              <option key={doctorData.id} value={doctorData.id}>
                {doctorData.doctor}
              </option>
            );
          })}
        </select>
      </label>
      {sort === "all"
        ? patientsList.map((patient) => {
            return (
              <p key={patient.id}>
                {patient.id}
                <br />
                {patient.firstName}
                <br />
                {patient.lastName}
                <br />
                {patient.dateOfBirth}
              </p>
            );
          })
        : ""}
      {filteredPatients.map((patients) => {
        return (
          <Patient
            lastName={patients.lastName}
            firstName={patients.firstName}
            dateOfBirth={patients.dateOfBirth}
            id={patients.id}
            key={patients.id}
          />
        );
      })}
    </div>
  );
};

export default DataBaseWithPatients;
