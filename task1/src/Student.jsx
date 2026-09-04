import React from 'react';
import './Student.css'; // Optional: for basic styling

function Student({ name, course, college }) {
  return (
    <div className="student-profile">
      <h2>Student Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>College:</strong> {college}</p>
    </div>
  );
}

export default Student;
