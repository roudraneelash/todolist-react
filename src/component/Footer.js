import { useContext } from "react";
import ListCreate from "../context/list";

export default function Footer() {
  const { taskArray, pendingTask, completedTask, displayAll } =
    useContext(ListCreate);
  const taskLeft = taskArray.filter((task) => {
    return task.completed !== true;
  });

  return (
    <div className="footer-box">
      <p>
        <span className="task-no"></span>&nbsp;tasks left: {taskLeft.length}
      </p>
      <div>
        <span className="links">
          <span
            className="all"
            onClick={() => {
              displayAll();
            }}
          >
            All
          </span>
        </span>
        <span className="links">
          <span
            className="incomplete"
            onClick={() => {
              pendingTask();
            }}
          >
            Pending
          </span>
        </span>
        <span className="links">
          <span
            className="complete"
            onClick={() => {
              completedTask();
            }}
          >
            Completed
          </span>
        </span>
      </div>
    </div>
  );
}
