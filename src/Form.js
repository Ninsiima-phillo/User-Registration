import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import  { useState } from 'react';

  
function UserForm(props) {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  
  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  
  const changeLastName = (event) => {
    setLastName(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeTelephone = (event) => {
    setTelephone(event.target.value);
  };
  
  const addUser = (event) => {
    event.preventDefault();
    const val = {
      firstname,
      lastname,
      email,
      telephone,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setTelephone('');
  };
  
  return (

    <div>
        <form>
            <label>First Name</label><br/>
            <input type="text" value={firstname} onChange={changeFirstName}/><br/>
            <label>Last Name</label><br/>
            <input type="text" value={lastname} onChange={changeLastName} /><br/>
            <label>Email</label><br/>
            <input type="email" value={email} onChange={changeEmail}/><br/>
            <label>Telephone</label><br/>
            <input type="phone" value={telephone} onChange={changeTelephone}/><br/><br/>
            <button type="submit" className="btn btn-primary" onClick={addUser}>Register</button>
        </form>
 </div> 
 
  );
}
  
export default UserForm;