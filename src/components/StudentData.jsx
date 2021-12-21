import React from "react";

function StudentData({ studentObj, onDelete }) {
  return (
    <tr >
      <td>{studentObj.firstName}</td>
      <td>{studentObj.lastName}</td>
      <td>{studentObj.email}</td>
      <td>
        <a href="#" className="btn btn-primary mr-2">
          Update
        </a>

        <a href="#" className="btn btn-danger" onClick={() => onDelete(studentObj.studentId)} >
          Delete
        </a>
      </td>
    </tr>
  );
}

export default StudentData;
