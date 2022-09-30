import React, { useState } from "react";
import "./CreateStuden.css";
import axios from "axios";
function CreateStudent() {
  const [student, setStudent] = useState({
    regNo: 0,
    studentName: "",
    grade: "",
    section: "",
  });

  const createStudent = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/students", student);
  };
  return (
    <div className="createStuden">
      <form>
        <textarea
          id=""
          name=""
          rows="40"
          value={student.regNo}
          onChange={(event) => {
            setStudent({ ...student, regNo: event.target.value });
          }}
        />
        <input
          type="text"
          name=""
          value={student.studentName}
          onChange={(event) => {
            setStudent({ ...student, studentName: event.target.value });
          }}
          placeholder="student Name"
        />
        <input
          type="text"
          name=""
          value={student.grade}
          onChange={(event) => {
            setStudent({ ...student, grade: event.target.value });
          }}
          placeholder="grade"
        />
        <input
          type="text"
          name=""
          value={student.section}
          onChange={(event) => {
            setStudent({ ...student, section: event.target.value });
          }}
          placeholder="section"
        />

        <button onClick={createStudent}>Save</button>
      </form>
    </div>
  );
}

export default CreateStudent;
