import React from "react";
// import axios from 'axios';

export default function Phone() {
  const date = new Date();
  const time = date.getHours();
  console.log("time", time);

  return (
    <div>
      <h1>This ia a place for a phone and time</h1>
      <p>{time < 9 || time >= 17 ? "Sorry, We are closed" : "we are open"}</p>
    </div>
  );
}
