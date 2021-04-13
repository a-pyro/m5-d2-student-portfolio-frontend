import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import StudentList from './StudentList';

const MainPage = () => {
  const [students, setStudents] = useState([]);
  return (
    <Container>
      <StudentList students={students} />
    </Container>
  );
};

export default MainPage;
