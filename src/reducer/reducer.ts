import { ITask } from "../utils/types";
import { v4 as uuidv4 } from "uuid";

export const initializer = (initialValue = { tasks: [] }) => {
  const store = localStorage.getItem("store");
  if (store) {
    return JSON.parse(store);
  }
  return initialValue;
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "CREATE_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload, id: uuidv4() }],
      };
    case "COMPLETE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task: ITask) => {
          if (task.id === action.payload) {
            return { ...task, completed: true };
          }
          return task;
        }),
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks?.filter((task: ITask) => task.id !== action.payload),
      };
    case "UPDATE_TASK":
      return {
        ...state,
        editingTask: {},
        tasks: state.tasks.map((task: ITask) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    case "SET_EDITING_TASK":
      return {
        ...state,
        editingTask: action.payload,
      };
    default:
      throw new Error();
  }
}

export default reducer;
