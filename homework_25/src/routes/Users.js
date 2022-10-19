import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Spiner from "../components/Spiner";
import { getUsers } from "../api/api";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const handleClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spiner />;
  }

  return (
    <section className="users">
      <div className="wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <td>Firs Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td><button onClick={() => handleClick(user.id)} className="user-btn">Show more</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;