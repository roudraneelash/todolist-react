import { useState, useContext } from "react";
import ListCreate from "../context/list"; // import the context created earlier
import { v4 as uuid } from "uuid"; // import uuid to generate unique ids
import { GrAddCircle } from "react-icons/gr"; // import an icon from react-icons

export default function Addtask() {
  const [value, setValue] = useState("");
  const { CreateTask } = useContext(ListCreate); // use the context created earlier

  function handleChange(e) {
    setValue(e.target.value); // update the state to the current input value
  }

  function handleSubmit(e) {
    e.preventDefault();
    const unique_id = uuid(); // generate a unique id for each task
    const small_id = unique_id.slice(0, 7); // shorten the id to 7 characters

    const task = {
      // create a new task object with the input value and generated id
      userId: 1,
      id: small_id,
      title: value,
      body: value,
      completed: false,
    };

    CreateTask(task); // add the new task to the list using the context
    setValue(""); // reset the input field
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Type your todo list"
          className="input"
        ></input>
        <button className="btn add" type="submit">
          <GrAddCircle /> {/* add the icon for the submit button */}
        </button>
      </form>
    </div>
  );
}
