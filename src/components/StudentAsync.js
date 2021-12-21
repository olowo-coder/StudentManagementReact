import React from 'react'
import { useState, useEffect } from "react";
import Header from './Header';
import CreateUsingAsync from './CreateUsingAsync';
import StudentRow from './StudentRow';

function StudentAsync() {
    const[students, setStudents] = useState([])
    const [showAddStudent, setShowAddStudent] = useState(false)

    useEffect( () => {
        const getStudents = async () =>{
          const studentsFromServer = await fetchStudents()
          setStudents(studentsFromServer)
        }
        getStudents()
      }, [])

    //Fectch all students
    const fetchStudents = async() => {
        const res = await fetch("http://localhost:9090/students/api");
        const data = await res.json();
        return data;
      }


    const addStudentToDb = async (student) => {
        const res = await fetch("http://localhost:9090/students/api/add", 
        {method: 'POST',
        headers:{'Content-type' : 'application/json'},
        body: JSON.stringify(student)
        })

        const data = await res.text()
        console.log(data)
        const updateFromServer = await fetchStudents()
        setStudents(updateFromServer)
    } 


    const deleteStudent = async (studentId) => {
        const res = await fetch(`http://localhost:9090/students/api/delete/${studentId}`, {method: 'DELETE'})
        const data = await res.text()
        console.log(data)
        setStudents(students.filter(student=> student.studentId !== studentId));
      }

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
        {showAddStudent && <CreateUsingAsync addingStudent={addStudentToDb}/>}
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
              <StudentRow
              studentsAll={students}
              onDelete={deleteStudent}
              />
          </tbody>
        </table>
        </div>
      </div>
    )
}

export default StudentAsync
