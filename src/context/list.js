import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create context for the task list
const ListCreate = createContext();

function Provider({ children }) {
  const [taskArray, setTaskArray] = useState([]); // State for the entire task list
  const [renderedArray, setRenderedArray] = useState([]); // State for the filtered task list

  // Function to add a new task to the list
  function CreateTask(task) {
    if (task.text === "") return;
    else {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", task)
        .then((response) =>
          setTaskArray([...taskArray, { ...response.data, id: task.id }])
        )
        .catch((error) => console.log(error));
    }
  }

  // Function to toggle the completed state of a task
  function handleToggle(id) {
    const arr = taskArray.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTaskArray(arr);
  }

  // Function to delete a task from the list
  function handleDelete(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => {
        const updatedTodos = taskArray.filter((t) => t.id !== id);
        setTaskArray(updatedTodos);
      })
      .catch((error) => console.log(error));
  }

  // Function to mark all tasks as completed
  function completeAll() {
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        completed: true,
      })
      .then(() => {
        const updatedTaskArray = taskArray.map((task) => {
          return {
            ...task,
            completed: true,
          };
        });
        setTaskArray(updatedTaskArray);
      })
      .catch((error) => console.log(error));
  }

  // Function to clear all completed tasks from the list
  function clearCompleted() {
    const arr = taskArray.filter((task) => {
      return task.completed !== true;
    });
    setTaskArray([...arr]);
  }

  // Function to filter tasks that are not yet completed
  function pendingTask() {
    const arr = taskArray.filter((task) => {
      return task.completed !== true;
    });

    setRenderedArray([...arr]);
  }

  // Function to filter tasks that are completed
  function completedTask() {
    const arr = taskArray.filter((task) => {
      return task.completed === true;
    });

    setRenderedArray([...arr]);
  }

  // Function to display all tasks
  function displayAll() {
    setRenderedArray([...taskArray]);
  }

  // Fetch initial data from the API
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTaskArray(response.data.slice(0, 5)))
      .catch((error) => console.log(error));
  }, []);

  // Update filtered task list whenever the main task list is updated
  useEffect(() => {
    setRenderedArray([...taskArray]);
  }, [taskArray]);

  // Object containing all functions and states to share with components
  const valueToShare = {
    taskArray,
    renderedArray,
    CreateTask,
    completeAll,
    clearCompleted,
    pendingTask,
    completedTask,
    displayAll,
    handleDelete,
    handleToggle,
  };

  return (
    <ListCreate.Provider value={valueToShare}>{children}</ListCreate.Provider>
  );
}

export { Provider };
export default ListCreate;
