import React from "react";
import {Link} from 'react-router-dom';
import PhoneAndTime from '../components/phoneandtime'

const HomePage = () => {
  return <div>
      <Link to='/doctors'>
        <button>Doctors on duty</button>
      </Link>
      <Link to='/signup'>
        <button>Sugn Up</button>
    </Link>
    <PhoneAndTime />
  </div>;
};

export default HomePage;