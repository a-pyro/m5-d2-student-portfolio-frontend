import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row } from 'react-bootstrap';
import AddStudent from './AddStudent';
import StudentList from './StudentList';

const MainPage = () => {
  const [students, setStudents] = useState([]);

  const fetchStudentsCallback = async () => {
    const resp = await fetch('http://localhost:3001/students/');
    const students = await resp.json();
    setStudents(students);
  };

  const fetchStudents = useCallback(fetchStudentsCallback, [setStudents]);

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <Container className='mt-5'>
      <Row>
        <AddStudent fetchStudents={fetchStudents} />
        <StudentList students={students} fetchStudents={fetchStudents} />
      </Row>
    </Container>
  );
};

export default MainPage;
