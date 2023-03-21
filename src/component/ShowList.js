import { useContext } from "react";
import ListCreate from "../context/list";
import Task from "./Task";

export default function ShowList() {
  const { renderedArray } = useContext(ListCreate);

  const renderedList = renderedArray.map((task) => {
    return <Task item={task} key={task.id} />;
  });

  return <div className="list">{renderedList}</div>;
}
