import { useState } from "react";
import { MdOutlineDownloadDone } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleOnChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };

  const handleOnClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setdueDate("");
  };

  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here "
            value={todoName}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleOnClicked}
          >
            <MdOutlineDownloadDone />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
