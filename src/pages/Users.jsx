import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import User from "../components/User";
import Home from "./Home";
import axios from "axios";

function Users() {
  const { id } = useParams()
  const [user, setUser] = useState({})

  async function fetchUser() {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    setUser(data)
  }
  useEffect(() => {
    fetchUser()
    }, [])
  return (
    <div>
      <Link to="/">Go Back</Link>
      <h1>Id: {user.id}</h1>
      <h1>Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
      <h1>Username: {user.username}</h1>
    </div>
  );
}

export default Users