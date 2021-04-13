import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import AddStudent from './AddStudent';
import StudentList from './StudentList';

const MainPage = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const resp = await fetch('http://localhost:3001/students/');
    const students = await resp.json();
    setStudents(students);
  };

  useEffect(() => {
    fetchStudents();
  }, [students]);
  return (
    <Container className='mt-5'>
      <Row>
        <AddStudent />
        <StudentList students={students} />
      </Row>
    </Container>
  );
};

export default MainPage;
