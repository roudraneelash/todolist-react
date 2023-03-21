import { IoCheckmarkDone } from "react-icons/io5";
import { useContext } from "react";
import ListCreate from "../context/list";

export default function FooterBox() {
  const { completeAll, clearCompleted } = useContext(ListCreate);

  return (
    <div className="footer-box">
      <span className="links">
        <IoCheckmarkDone />
        <span
          className="complete-all"
          onClick={() => {
            completeAll();
          }}
        >
          Complete all task
        </span>
      </span>
      <span className="links">
        <span
          className="clear"
          onClick={() => {
            clearCompleted();
          }}
        >
          Clear completed
        </span>
      </span>
    </div>
  );
}
