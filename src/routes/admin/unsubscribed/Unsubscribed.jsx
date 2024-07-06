import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FiredUsers = () => {
  const [firedUsers, setFiredUsers] = useState([]);

  useEffect(() => {
    const firedUsers = JSON.parse(localStorage.getItem('firedUsers')) || [];
    setFiredUsers(firedUsers);
  }, []);

  return (
    <div>
      <h1 style={{ marginTop: '80px' }}>Ishdan bo`shatilganlar</h1>
      {firedUsers.length > 0 ? (
        <table style={{ width: '280%', borderCollapse: 'collapse', marginTop: '40px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Avatar</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {firedUsers.map((user, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                  <img src={user.avatar} alt={user.first_name} style={{ width: '50px', borderRadius: '50%' }} />
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                  <Link to={`/user/${user.id}`}>{user.first_name} {user.last_name}</Link>
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Hozircha ishdan bo`shatilgan foydalanuvchilar yo`q.</p>
      )}
    </div>
  );
};

export default FiredUsers;
