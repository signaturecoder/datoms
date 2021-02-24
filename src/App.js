import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSeachUser] = useState("");
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((user) => {
        setUsers(user.data);
      });
  }, []);

  const handleInputChange = (e) => {
    setSeachUser(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchUser);
    const filteredUser = users.filter(
      (user) => user.first_name === searchUser || user.last_name === searchUser
    );
    setUsers(filteredUser);
  };
  return (
    <div className="App">
      <h3>userList</h3>
      <input
        type="text"
        onChange={handleInputChange}
        value={searchUser}
      ></input>
      <button onClick={handleSearch}>Search</button>
      <table className="USer__Table">
        <tbody>
          <th >
            {" "}
            <td>Image</td>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          
          </th>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                   <td>
                  <img className="Avatar" src={user.avatar} alt="profile_pic" />
                </td>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
             
              </tr>
            ))
          ) : (
            <tr>
              <td>No Users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
