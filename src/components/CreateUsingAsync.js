import React from 'react'
import { useState } from 'react';

function CreateUsingAsync({ addingStudent }) {
   
    const [firstName, setFirstName] = useState ('')
    const [lastName, setLastName] = useState ('')
    const [email, setEmail] = useState ('')


     //Add Student
    const onSubmit = async (e) => {
        e.preventDefault()
        if(!firstName){
            alert('Please fill the first Name')
            return
        }

        if(!lastName){
            alert('Please fill the Last Name')
            return
        }

        if(!email){
            alert('Please fill the Email')
            return
        }

        addingStudent({firstName, lastName, email})
        
        setFirstName('')
        setLastName('')
        setEmail('')
    } 


    
    
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 container justify-content-center card">
          <h1 className="text-center"> Create New Student </h1>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label> Student First Name </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="Enter Student First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label> Student Last Name </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Enter Student Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label> Student Email </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Enter Student Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={false}
                  />
              </div>

              <div className="box-footer">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default CreateUsingAsync
