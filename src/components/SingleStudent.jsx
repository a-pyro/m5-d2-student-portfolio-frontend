import { Badge, ListGroupItem } from 'react-bootstrap';

const SingleStudent = ({
  name,
  surname,
  email,
  dateOfBirth,
  _id,
  fetchStudents,
}) => {
  const deleteUser = async () => {
    const resp = await fetch(`http://localhost:3001/students/${_id}`, {
      method: 'DELETE',
    });
    console.log(resp);
    fetchStudents();
  };
  return (
    <ListGroupItem>
      {name} {surname} {email} {dateOfBirth}{' '}
      <Badge
        variant='danger'
        style={{ cursor: 'pointer' }}
        onClick={deleteUser}
      >
        x
      </Badge>
    </ListGroupItem>
  );
};

export default SingleStudent;
