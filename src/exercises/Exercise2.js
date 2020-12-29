import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Exercise2() {
  // your code here
  const [users, setUsers] = useState([])

  useEffect( async () => {
    let users = await axios.get("https://randomuser.me/api/?results=5")
    users = users.data.results.map(u =>{ return  {first: u.name.first, last: u.name.last, picture: u.picture.medium}})
    setUsers(users)
  },[])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map(u => (
          <div key={u.picture}>
            <p>{u.first} {u.last}</p>
            <img src={u.picture} alt="picture"/>
          </div>
        ))}
      </div>
    </div>
  )
}