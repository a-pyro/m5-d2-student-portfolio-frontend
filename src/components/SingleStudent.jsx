import { Badge, ListGroupItem } from 'react-bootstrap';
import EditUserModal from './EditUserModal';

const SingleStudent = ({
  name,
  surname,
  email,
  dateOfBirth,
  id,
  fetchStudents,
}) => {
  const deleteUser = async () => {
    const resp = await fetch(`http://localhost:3001/students/${id}`, {
      method: 'DELETE',
    });
    console.log(resp);
    fetchStudents();
  };

  const editUser = async () => {
    console.log('dafunk');
  };
  return (
    <ListGroupItem>
      {name} {surname} {email} {dateOfBirth}{' '}
      <div>
        <Badge
          className='mr-2'
          variant='danger'
          style={{ cursor: 'pointer' }}
          onClick={deleteUser}
        >
          delete
        </Badge>
        <EditUserModal
          name={name}
          surname={surname}
          email={email}
          dateOfBirth={dateOfBirth}
          id={id}
          fetchStudents={fetchStudents}
        >
          <Badge
            variant='warning'
            style={{ cursor: 'pointer' }}
            onClick={editUser}
          >
            edit
          </Badge>
        </EditUserModal>
      </div>
    </ListGroupItem>
  );
};

export default SingleStudent;
