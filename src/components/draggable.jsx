import React from "react";

const Draggable = () => {
  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("JSON", "darshan");
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(ev.dataTransfer.getData("JSON"))
    ev.target.appendChild(document.getElementById(data));
  }

  return (
    <div>
      <div id="div1" onDrop={drop} onDragOver={allowDrop}>
        <p
          draggable="true"
          onDragStart={drag}
          id="drag1"
          width="88"
          height="31"
        >asdkjhaskuhf</p>
      </div>

      <div id="div2" onDrop={drop} onDragOver={allowDrop}></div>
    </div>
  );
};

export default Draggable;
