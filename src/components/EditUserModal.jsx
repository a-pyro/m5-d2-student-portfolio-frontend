import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditUserModal = ({
  name,
  surname,
  email,
  dateOfBirth,
  id,
  fetchStudents,
  children,
}) => {
  const initialFields = {
    name,
    surname,
    email,
    dateOfBirth,
  };
  const [show, setShow] = useState(false);
  const [fields, setFields] = useState(initialFields);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editStudent = async () => {
    const resp = await fetch(`http://localhost:3001/students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    });
    console.log(resp);
    if (resp.ok) {
      // console.log(resp);
      fetchStudents();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editStudent();
  };
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <>
      <span onClick={handleShow}>{children}</span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={fields.name}
                onChange={handleChange}
                type='text'
                name='name'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>surname</Form.Label>
              <Form.Control
                value={fields.surname}
                onChange={handleChange}
                type='text'
                name='surname'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>email</Form.Label>
              <Form.Control
                value={fields.email}
                onChange={handleChange}
                type='email'
                name='email'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>date of birth</Form.Label>
              <Form.Control
                value={fields.dateOfBirth}
                onChange={handleChange}
                type='date'
                name='dateOfBirth'
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditUserModal;
