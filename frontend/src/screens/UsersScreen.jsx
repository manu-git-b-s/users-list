import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchAllUsers() {
    setLoading(true);
    const response = await fetch("http://localhost:5000/api/users", {
      credentials: "omit",
    });

    const data = await response.json();
    if (data) {
      setLoading(false);
      setUsers(data);
    }
  }
  console.log(users);
  useEffect(() => {
    fetchAllUsers();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-center mb-5">Users List</h1>
      <table className="table table-striped table-dark">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email ID</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              );
            })
          ) : (
            <h1>NO Data Left</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersScreen;
