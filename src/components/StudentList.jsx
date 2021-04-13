import { Col, ListGroup, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import SingleStudent from './SingleStudent';

const StudentList = ({ students }) => {
  return (
    <Row className='justify-content-center'>
      <Col xs={6}>
        <ListGroup>
          {students.map((student) => (
            <SingleStudent key={uuidv4()} {...student} />
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default StudentList;
