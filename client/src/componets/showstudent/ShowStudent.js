import React, { useEffect, useState } from "react";
import axios from "axios";
import { Delete } from "@material-ui/icons";
function ShowStudent() {
  const [studentlist, setStudentlist] = useState([]);
  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`).then(() => {
      studentlist();
    });
  };
  useEffect(() => {
    axios.get("http://localhost:5000/students").then((allstudents) => {
      setStudentlist(allstudents.data);
    });
  }, [studentlist]);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {studentlist.map((students, key) => (
            <tr key={key}>
              <th scope="row">{key}</th>
              <td>{students.regNo}</td>
              <td>{students.studentName}</td>
              <td>{students.grade}</td>
              <td>{students.section}</td>
              <td>
                <Delete onClick={() => deleteStudent(students._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowStudent;
