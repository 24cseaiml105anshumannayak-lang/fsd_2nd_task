import React from 'react';
import Student from './Student';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Student Profiles</h1>
      <div className="students-list">
        <Student 
          name="Alice Smith" 
          course="Computer Science" 
          college="MIT" 
        />
        <Student 
          name="Bob Johnson" 
          course="Mechanical Engineering" 
          college="Stanford University" 
        />
      </div>
    </div>
  );
}

export default App;
