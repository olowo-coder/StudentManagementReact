import React from 'react';
import { useState, useEffect } from "react";
import Header from './Header';
import CreateStudentForm from './CreateStudentForm';

function StudentComponentUsingFunction() {
    const[students, setStudents] = useState([])
    const [showAddStudent, setShowAddStudent] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9090/students/api")
        .then(res=>res.json())
        .then(result => {
            setStudents(result)
        })
    }, [])

    return (
        <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a className="navbar-brand" href="#">
            Student Management System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Student Management
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Teacher Management
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className ="container">
        <div className="row">
          <h1> List Students </h1>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <Header
                onAdd={() => 
                setShowAddStudent(!showAddStudent)}
                showAdd={showAddStudent}
                />
          </div>
          
        </div>
        {showAddStudent && <CreateStudentForm />}
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th> Student First Name</th>
              <th> Student Last Name</th>
              <th> Student Email </th>
              <th> Actions </th>
            </tr>
          </thead>

          <tbody>
              {students.map(student => 
            <tr key={student.studentId}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>
                <a
                  href="#"
                  className="btn btn-primary mr-2"
                >
                  Update
                </a>

                <a
                  href="#"
                  className="btn btn-danger"
                >
                  Delete
                </a>
              </td>
            </tr>
                )}
          </tbody>
        </table>
        </div>
      </div>
    )
}

export default StudentComponentUsingFunction
