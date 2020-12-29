import React, { useState } from 'react'

export default function Exercise1() {
  // your code here
  const [userData, setUserData] = useState({name:"", city:"", country: ""}) 
  const handleChange = event => setUserData({...userData, [event.target.id]: event.target.value})
  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input type="text" name="userName" id="name" onChange={handleChange} value={userData.name}/>
        <input type="text" name="userCity" id="city" onChange={handleChange} value={userData.city}/>
        <select name="country" id="country" onChange={handleChange}>
          {countries.map(c => <option key={c} value={c}>{c}</option> )}
        </select>
      </div>
    </div>
  )
}