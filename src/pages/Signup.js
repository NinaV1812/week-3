import React, { useState } from "react";
 


const AddPatient= () => {
    const [form, set_form] = useState("");

    const onFieldChange = event => {
       set_form({...form, [event.target.name]: event.target.value});

     };

     const submitForm = event => {
        event.preventDefault();
        console.log("form", form)
      };

      return (                          
        <div style={{marginTop: 20}} className="AddPatientForm">

        <form onSubmit={submitForm}>
              <label>
                  First Name
                <input 
                style={{marginLeft: 20,  padding: 15}}
                onChange={onFieldChange}
                name='FirtsName'
            />
            </label>
            <br />
            <label>
                Last Name
                <input 
                style={{marginLeft: 20,  padding: 15}}
                onChange={onFieldChange}
                name='LastName'
                />
            </label>
            <br />
            <label>
                Email
                <input 
                style={{marginLeft: 20,  padding: 15}}
                onChange={onFieldChange}
                name='email'
                />
            </label>
            <br />
            <label>
                Phone Number
                <input 
                style={{marginLeft: 20,  padding: 15}}
                onChange={onFieldChange}
                name='phoneNumber'
                />
            </label>
            <br />
            <label>
                Date of Birth
                <input 
                style={{marginLeft: 20,  padding: 15}}
                onChange={onFieldChange}
                name='dateOfBirth'
                type="date"
                />
            </label>
            <br />
            <label>
                Choose gender:
                <select                 
                style={{marginLeft: 20,  padding: 15}}
                 name="gender" onChange={onFieldChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="no">Nothing above</option>
                </select>
            </label>
   
            <br />
            <button style={{marginLeft: 20,  padding: 15}} type='submit'>Add</button>
          </form>
        </div>
      );
};

export default AddPatient;