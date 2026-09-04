import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from '../StudentContext';

function Courses() {
  const { studentInfo } = useContext(StudentContext);

  return (
    <div className="page-container">
      <h1>My Courses</h1>
      <ul className="course-list">
        {studentInfo.enrolledCourses.map(course => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
