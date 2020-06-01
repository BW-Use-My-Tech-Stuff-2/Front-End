import { axiosWithAuth } from '../utils/axiosWithAuth';
import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import MyItems from './MyItems';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/users', localStorage.getItem('token'))
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        {users.map((item) => (
          <UserCard key={item.id} name={item.username} />
        ))}
        {<MyItems />}
      </div>
    </>
  );
}
