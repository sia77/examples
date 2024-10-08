import { State } from "./interfaces/TasksTypes";
import { useReducer } from "react";
import { TaskMangerReducer } from "./reducers/TaskManagerReducer";
import './style.css';
import AddTask from "./components/AddTask";
import UndoRedoOp from "./components/UndoRedoOp";
import TaskList from "./components/TaskList";
import { TasksContext } from "./contexts/TasksContext"
import { TaskContextType } from "./interfaces/Context";



export default function TaskManagerApp(){

    const [tasksState, dispatch] = useReducer(TaskMangerReducer, initialSate);
    
    
    const contextObj: TaskContextType = {
        state:tasksState, 
        dispatch:dispatch
    }
    
    return(
        <>
        <h1>Task Manager</h1>
        <TasksContext.Provider value={contextObj}>
            <div className="container">
                <AddTask />
                <UndoRedoOp />
            </div>
            <TaskList />
        </TasksContext.Provider>
            


            <div>
                <h6>Undo list</h6>
                {
                    tasksState.undoList.map((el, index) => <div key={el.task.id-index}>{el.task.text} {el.task.done?'true':'false'} {el.actionType}</div>)
                }
            </div>
            <div>
            <h6>Redo list</h6>
                {
                    tasksState.redoList.map((el, index) => <div key={el.task.id-index}>{el.task.text} {el.task.done?'true':'false'} {el.actionType}</div>)
                }
            </div>
        </>
    )



}

const initialSate:State ={
    tasks:[
        { id:0, text:"Buy Apples", done:true },
        { id:1, text:"Go for a walk", done:false },
        { id:2, text:"Relax! Don't do it.", done:false }
    ],
    undoList:[],
    redoList:[],
    nextId: 3
} 