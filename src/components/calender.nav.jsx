import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa"


const CalenderNav = ({month, setMonth}) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let handleMonths = (e)=>{
      let action = e.currentTarget.getAttribute('data-month')
      if(action === "decrease"){
        if(month<=0){
          setMonth(11)
        }else{
          setMonth(month-1)
        }
      }
      if(action === "increase"){
        if(month>=11){
          setMonth(0)
        }else{
          setMonth(month+1)
        }
      }
    }

  return (
    <>
      <ButtonGroup>
        <Button data-month="decrease" onClick={handleMonths} variant="none"><FaArrowCircleLeft className="fs-1"/></Button>
        <h4 className="display-4" style={{width: "10ch"}} >{months[month]}</h4>
        <Button data-month="increase" onClick={handleMonths} variant="none"><FaArrowCircleRight className="fs-1"/></Button>
      </ButtonGroup>
    </>
  );
};

export default CalenderNav;
