import React, { Component } from "react";
import userservices from "../services/UserServices";
import { useState, useEffect } from "react";
import CreateStudentForm from "./CreateStudentForm";
import Header from "./Header";


class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showAddStudent:false
    };
  }

  componentDidMount() {
    userservices.getUsers().then((Response) => {
      this.setState({ users: Response.data });
    });
  }

  

  render() {

    // const [showAddStudent, setShowAddStudent] = this.state ({ showAddStudent: false });

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
            {/* <a href="#" className="btn btn-primary btn-sm mb-3">
              Add Student
            </a> */}
            <Header
                onAdd={() => 
                this.setState({showAddStudent: !this.state.showAddStudent})}
                showAdd={this.state.showAddStudent}
                />
          </div>
          
        </div>
        {this.state.showAddStudent && <CreateStudentForm />}
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
              {this.state.users.map(user => 
            <tr key={user.studentId}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
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
    );
  }
}

export default UserComponent;
