import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [studentInfo] = useState({
    name: 'Jane Doe',
    id: 'S12345',
    major: 'Computer Science',
    enrolledCourses: [
      { id: 'cs101', name: 'Introduction to Programming' },
      { id: 'math201', name: 'Calculus II' }
    ]
  });

  return (
    <StudentContext.Provider value={{ studentInfo }}>
      {children}
    </StudentContext.Provider>
  );
};
