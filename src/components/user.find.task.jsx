import React,{useRef} from "react";
import { Modal, Form, Button } from "react-bootstrap";

const FindTask = ({ createEvent, setUserYear,setCreateEvent , calender }) => {
  let handleClose = () => {
    setCreateEvent(false)
  };

  let inputDate = useRef()
  let inputText = useRef()
  let inputTime = useRef()
  let inputFile = useRef()
  let inputImage = useRef()

  let handleFindTask = ()=>{
      
  }

  let handleSetTask = ()=>{

    // processing date
    let [year,month,day] = inputDate.current.value.split("-").map(item=>parseInt(item))

    // processing text
    let text = inputText.current.value;

    // processing time
    let time = inputTime.current.value

    //  processing image
    let file = inputFile.current.files[0]
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      inputImage.current.src = reader.result
      calender.setTask(day,month,year,time,text,reader.result)
      return;
    }, false);
    if (file) {
      reader.readAsDataURL(file)
    }
    calender.setTask(day,month,year,time,text,"")
    setCreateEvent(false)

  }

  return (
    <Modal show={createEvent} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" onChange={handleFindTask} ref={inputDate}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" ref={inputTime}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>File</Form.Label>
            <img src="" height="100" alt="" ref={inputImage} />
            <Form.Control type="file" ref={inputFile}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Task Details</Form.Label>
            <Form.Control as="textarea" rows={3} className="text-danger" ref={inputText} placeholder="Write some tasks!" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button onClick={handleSetTask}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FindTask;
