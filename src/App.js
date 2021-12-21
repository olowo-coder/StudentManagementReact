// import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';
import { useState, useEffect } from "react";
import StudentComponentUsingFunction from './components/StudentComponentUsingFunction';
import StudentAsync from './components/StudentAsync';

function App() {
  

  return (
    <div className="App">
      {/* <UserComponent /> */}
      {/* <StudentComponentUsingFunction /> */}
      <StudentAsync />

    </div>
  );
}

export default App;
