import { RxCrossCircled } from "react-icons/rx";
import { useContext } from "react";
import ListCreate from "../context/list";

function Task({ item }) {
  const { handleDelete, handleToggle } = useContext(ListCreate);
  return (
    <div className="item">
      <input
        className="check-box"
        type="checkbox"
        onChange={() => {
          handleToggle(item.id);
        }}
        checked={item.completed}
      ></input>
      <label className="text">{item.title}</label>
      <button
        className="btn"
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        <RxCrossCircled />
      </button>
    </div>
  );
}

export default Task;
