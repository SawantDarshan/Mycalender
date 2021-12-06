import React,{useState, useEffect} from 'react'
import CalenderLayout from './components/calender.layout'
import {Calender} from "./data/data.date"
import FindTask from './components/user.find.task'

const App = () => {

  let [calender, setCalender] = useState()
  let [userYear, setUserYear] = useState(new Date().getFullYear())
  let [createEvent , setCreateEvent] = useState(true)


  useEffect(() => {
    setCalender(new Calender(userYear))
  }, [createEvent,userYear])



  return (
    <>
      <FindTask setUserYear={setUserYear} createEvent={createEvent} setCreateEvent={setCreateEvent} calender={calender} />
      <CalenderLayout  calender={calender} setCreateEvent={setCreateEvent} setUserYear={setUserYear}></CalenderLayout>
    </>
  )
}

export default App
