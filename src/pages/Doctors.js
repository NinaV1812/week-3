import React, { useEffect, useState } from "react";
import axios from "axios";
import PhoneAndTime from "../components/phoneandtime";

const Doctors = () => {
  const [doctors, set_doctors] = useState([]);
  const [loadState, set_loadState] = useState("idle");

  useEffect(() => {
    const displayPhone = async () => {
      set_loadState({ status: "loading" });

      const data = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );
      console.log("this is data", data);

      let doctorArray = data.data;

      set_loadState({ status: "done", results: doctorArray });

      set_doctors(doctorArray);
    };
    displayPhone();
  }, []);

  return (
    <div>
      {loadState.status === "loading" ? "LOADING..." : null}
      {loadState.status === "done" ? (
        <table>
          <thead>
            <tr>
              <th>Doctors</th>
              <th>On Duty/Not</th>
            </tr>
          </thead>
          {doctors.map((doctor) => {
            return (
              <tbody key={doctor.id}>
                <tr>
                  <td>{doctor.doctor}</td>
                  <td>{doctor.onDuty ? "Available" : " Not Available"}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        "I am working"
      )}

      <PhoneAndTime />
    </div>
  );
};

export default Doctors;
