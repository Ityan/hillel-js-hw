import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Spiner from "../components/Spiner";
import { getUserById } from "../api/api";
import "../assets/css/user.css";

const getFullName = (user) => {
  return `${user.firstName} ${user.lastName}`;
};

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(userId).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, [userId]);

  if (isLoading) {
    return <Spiner />;
  }

  return (
    <section>
      <div className="wrapper">
        <Link to="/users" className="back-link">Back to Users</Link>
        <div className="user-wrapper">
          <div className="container">
            <img src={user.image} alt="" className="profile-img" />
            <div className="content">
              <div className="sub-content">
                <h2>{getFullName(user)}</h2>
                <span>{user.phone}</span>
                
                <p>{user?.company?.name}</p>
                <span className="location"><i className="fa fa-map-marker" ></i>{user?.company?.address?.city}</span>
                <a href={`http://www.${user.domain}/`}>{user.domain}</a>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;