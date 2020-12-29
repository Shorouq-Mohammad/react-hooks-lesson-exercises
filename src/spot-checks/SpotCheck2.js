import React, { useState } from 'react'

export default function SpotCheck2() {
  // your code here
  const [isLoading, setIsLoading] = useState(true)
  const [lesson, setLesson] = useState({ name: 'React Hooks', completed: false, started: false })

  const updateLesson = (key) => setLesson({...lesson, [key]: true})

  const otherwise = () => {
    let status
    if(lesson.completed){
      status = "Completed"
    }else if(lesson.started){
      status = "In progress"
    }else{
      status = "Not started"
    }
    return(
    <div>
      <p>lesson: {lesson.name}</p>
      <p>lesson Status: {status}</p>
      <button onClick={() => updateLesson("started")} >Begin Lesson</button>
      <button onClick={() => updateLesson("completed")}>Complete Lesson</button>
    </div>
  )}

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2">
        {isLoading ? <div>the page is loading ... </div> : otherwise() }

      </div>
    </div>
  )
}