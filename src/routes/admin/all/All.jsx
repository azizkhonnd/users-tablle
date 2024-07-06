import { useEffect, useState } from 'react';
import './All.css';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => setUsers(data.data));
  }, []);

  const handleFire = (userToFire) => {
    const firedUsers = JSON.parse(localStorage.getItem('firedUsers')) || [];
    localStorage.setItem('firedUsers', JSON.stringify([...firedUsers, userToFire]));
    setUsers(users.filter(user => user.id !== userToFire.id));
  };

  return (
    <div className='cardContent'>
      <div className='cardItem'>
        {users.map(user => (
          <div className='cardContainer' key={user.id} style={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
            <img src={user.avatar} alt={user.first_name} />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>{user.email}</p>
            <button className='buttonFire' onClick={() => handleFire(user)}>Ishdan Bo`shatish</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
