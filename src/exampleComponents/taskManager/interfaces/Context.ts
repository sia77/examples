import { Dispatch } from "react";
import { State, TasksAction } from "./TasksTypes";

export interface TaskContextType {
    state:State,
    dispatch:Dispatch<TasksAction>;
}