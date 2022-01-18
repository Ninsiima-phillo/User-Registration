import React, { useState } from 'react';
import UserForm from './Form';
import jsonData from './data.json';
  
function UserData() {
  const [studentData, setStudentData] = useState(jsonData);
  
  const tableRows = studentData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.firstname}</td>
        <td>{info.lastname}</td>
        <td>{info.email}</td>
        <td>{info.telephone}</td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };
  
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>NO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Telephone</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <UserForm func={addRows} />
    </div>
  );
}
  
export default UserData;
