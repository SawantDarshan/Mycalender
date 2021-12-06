import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CalenderNav from "./calender.nav";

// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const CalenderLayout = ({ calender, setUserYear, setCreateEvent }) => {
  let [data, setData] = useState([]);
  let [month, setMonth] = useState(11);
  let [year, setYear] = useState();
  let [yearModal, setYearModal] = useState(false);

  useEffect(() => {
    if (!calender) {
    } else {
      let a = calender.getCalender();
      setData(calender.getAlltask(a));
      setYear(calender.year);
    }
  }, [calender]);

  let handleYearClick = () => {
    setYearModal(!yearModal);
  };

  return (
    <Container className="text-center my-5">
      <h1 className="text-violet display-1">MY CALENDER</h1>
      <hr />
      <h1 onClick={handleYearClick} style={{ cursor: "pointer" }}>
        {year}
      </h1>
      {yearModal && (
        <div>
          <input
            type="number"
            placeholder="Enter Year"
            onChange={(e) =>
              setUserYear(parseInt(e.currentTarget.value))
            }
          />
        </div>
      )}
      <CalenderNav month={month} setMonth={setMonth} />
      <br />
      <br />
      <Row>
        {data.length
          ? data[month].map((item, index) => {
              if (item.task) {
                let [taskTime, taskText, taskImg] = item.task.split("@");
                return (
                  <div
                    key={index}
                    onClick={() => setCreateEvent(true)}
                    className="col p-5  m-1 rounded  day"
                  >
                    <p  className="display-4">{item.date.getDate()}</p>
                    <p  className="task-day">{days[item.date.getDay()]}</p>
                    <p  className="task-time">{taskTime}</p>
                    <img  src={taskImg} className="task-img" alt=""></img>
                    <hr />
                    {item.task ? (
                      <p
                        id="drag-data-task"
                        className="task rounded-pill"
                        draggable="true"
                        onDragStart={(ev) => {
                          ev.dataTransfer.setData("taskTime", taskTime);
                          ev.dataTransfer.setData("taskText", taskText);
                          ev.dataTransfer.setData("taskImg", taskImg);
                        }}
                      >
                        {taskText}
                      </p>
                    ) : (
                      <p></p>
                    )}
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  onDragOver={(ev) => {
                    ev.preventDefault();
                  }}
                  onDrop={(ev) => {
                    ev.preventDefault();
                    let taskTime = ev.dataTransfer.getData("taskTime");
                    let taskText = ev.dataTransfer.getData("taskText");
                    let taskImg = ev.dataTransfer.getData("taskImg");
                    let day = parseInt( item.date.getDate());
                    let month = parseInt( item.date.getMonth()+ 1);
                    let year = parseInt( item.date.getFullYear());
                    calender.setTask(day,month,year,taskTime,taskText,taskImg)
                  }}
                  onClick={() => setCreateEvent(true)}
                  className="col p-5  m-1 rounded  day"
                >
                  <p className="display-4">{item.date.getDate()}</p>
                  <p>{days[item.date.getDay()]}</p>
                </div>
              );
            })
          : "loading"}
      </Row>
    </Container>
  );
};

export default CalenderLayout;
