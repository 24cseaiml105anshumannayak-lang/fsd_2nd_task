import React, { useContext } from 'react';
import { StudentContext } from '../StudentContext';

function Home() {
  const { studentInfo } = useContext(StudentContext);

  return (
    <div className="page-container">
      <h1>Home Page</h1>
      <p>Welcome, {studentInfo.name}!</p>
      <p>Student ID: {studentInfo.id}</p>
      <p>Major: {studentInfo.major}</p>
    </div>
  );
}

export default Home;
