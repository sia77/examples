import { createContext, Dispatch } from "react";
import { TasksAction, State } from "../interfaces/TasksTypes";

interface TaskContextType {
    state:State,
    dispatch:Dispatch<TasksAction>;
}

export const TasksContext = createContext<TaskContextType | undefined>(undefined);