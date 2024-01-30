import React, { useState, useEffect } from 'react';
import userService from '../services/userService';

export default function LeaderboardPage({ kullaniciAdi }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // userGetAll API'sinden kullanıcı bilgilerini al
    const fetchUsers = async () => {
      try {
        const response = await new userService().userGetAll();
        const sortedUsers = response.data.data.sort((a, b) => b.userPoints - a.userPoints);
        setUsers(sortedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='h-[600px] grid content-center justify-items-center mt-[300px]'>
      <div className="w-[1000px] h-[800px] bg-gray-200 rounded-[20px] p-10">
        <h2 className="text-3xl font-bold mb-5 float-left">Leaderboard</h2>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border text-xl">#</th>
              <th className="border text-xl">Username</th>
              <th className="border text-xl">Points</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={user.userName === kullaniciAdi ? 'bg-gray-300' : ''}>
                <td className="border text-lg">{index + 1}</td>
                <td className="border text-lg">{user.userName}</td>
                <td className="border text-lg">{user.userPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
