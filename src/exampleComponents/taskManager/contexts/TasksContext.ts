import { createContext} from "react";
import { TaskContextType } from "../interfaces/Context";



export const TasksContext = createContext<TaskContextType | undefined>(undefined);