import { createContext, Dispatch } from 'react';
import { State, TaskAction } from '../interfaces/TaskTypes';



export const TasksContext = createContext<State | null>(null);
export const TasksDispatchContext = createContext<Dispatch<TaskAction> | null>(null);
