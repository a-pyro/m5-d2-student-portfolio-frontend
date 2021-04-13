import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const initialState = {
  name: '',
  surname: '',
  email: '',
  dateOfBirth: '',
};
const AddStudent = ({ fetchStudents }) => {
  const [fields, setFields] = useState(initialState);

  const addStudent = async () => {
    const resp = await fetch('http://localhost:3001/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    });
    if (resp.ok) {
      console.log(resp);
      fetchStudents();
      setFields(initialState);
    }
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent();
  };
  return (
    <Col xs={6}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={fields.name}
            onChange={handleChange}
            type='text'
            name='name'
            placeholder='Enter name'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>surname</Form.Label>
          <Form.Control
            value={fields.surname}
            onChange={handleChange}
            type='text'
            name='surname'
            placeholder='Enter surname'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>email</Form.Label>
          <Form.Control
            value={fields.email}
            onChange={handleChange}
            type='email'
            name='email'
            placeholder='Enter email'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>date of birth</Form.Label>
          <Form.Control
            value={fields.dateOfBirth}
            onChange={handleChange}
            type='date'
            name='dateOfBirth'
            placeholder='Enter date of birth'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default AddStudent;
