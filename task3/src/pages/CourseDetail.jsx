import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StudentContext } from '../StudentContext';

function CourseDetail() {
  const { id } = useParams();
  const { studentInfo } = useContext(StudentContext);

  const course = studentInfo.enrolledCourses.find(c => c.id === id);

  if (!course) {
    return <div className="page-container"><h2>Course not found</h2></div>;
  }

  return (
    <div className="page-container">
      <h2>Course Details</h2>
      <p><strong>Course ID:</strong> {course.id}</p>
      <p><strong>Course Name:</strong> {course.name}</p>
      <Link to="/courses" className="back-link">Back to Courses</Link>
    </div>
  );
}

export default CourseDetail;
