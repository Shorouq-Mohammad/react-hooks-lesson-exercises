import React, { useEffect, useState } from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {
  // your code here
  const [expenses, setExpenses] = useState([])
  const [month, setMonth] = useState(0)

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  
  useEffect(() => {
    async function fetchData() {
      const expens = await fetchExpenses(month)
      setExpenses(expens)

    }
    fetchData()
  },  [month])
  
 
  const handleChange = (event) => setMonth(parseInt(event.target.value) )
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <select name="month" id="month" onChange={handleChange} >
          {months.map((m,i )=> <option value={i} key={i}>{m}</option> )}
        </select>
        {expenses.map(e => <div key={e.date}>{e.amount + e.group + e.date + e.item } </div> )} 
      </div>
    </div>
  )
}