import { ListGroupItem } from 'react-bootstrap';

const SingleStudent = ({ name, surname, email, dateOfBirth }) => {
  return (
    <ListGroupItem>
      {name} {surname} {email} {dateOfBirth}
    </ListGroupItem>
  );
};

export default SingleStudent;
