import { ListGroupItem } from 'react-bootstrap';

const SingleStudent = ({ name, surname, email, dateOfBirth }) => {
  return <ListGroupItem>{name}</ListGroupItem>;
};

export default SingleStudent;
