import { useReducer, useState } from "react";
import AddTask from "./components/AddTask";
import style from './style.module.css';
import { TaskReducer } from "./reducers/TaskReducer";
import { TaskType} from "./interfaces/Types";
import TaskList from "./components/TaskList";
import { NextIdReducer } from "./reducers/NextIdReducer";
import { UndoRedoReducer } from "./reducers/UndoRedoReducer";
import {  UndoRedoActionType, UndoRedoState } from "./interfaces/UndoRedoTypes";
import Undo from "./components/Undo";

export default function TaskManagerApp2(){

    const [text, setText] = useState('');
    const [tasksState, dispatch] = useReducer(TaskReducer, taskInitialState);
    const [nextIdState, nextIdDispatch] = useReducer(NextIdReducer, nextidInitialSate );
    const [undoRedoState, undoRedoStateDispatch] = useReducer(UndoRedoReducer, undoRedoInitialState);


    function handleAddTask(text:string){
        //Add text
        nextIdDispatch({
            type:'INCREASE_ID'
        });
        dispatch({
            type:'ADD_TASK',
            text:text,
            id:nextIdState
        });

        const newTask:TaskType = { id:nextIdState, text:text, done:false };

        undoRedoStateDispatch({
            type:'TRACK_UNDO',
            undoTask: {task:newTask, action:UndoRedoActionType.ADD}
        });
        setText('');
    }

    function handleEditTask(task:TaskType){
        dispatch({
            type:'EDIT_TASK',
            task
        });

        undoRedoStateDispatch({
            type:'TRACK_UNDO',
            undoTask: {task:task, action:UndoRedoActionType.EDIT}
        });
    }

    function handleDeleteTask(task:TaskType){
        dispatch({
            type:'DELETE_TASK',
            id:task.id
        });

        undoRedoStateDispatch({
            type:'TRACK_UNDO',
            undoTask: {task:task, action:UndoRedoActionType.DELETE}
        });
    }

    function handleUndo(){
        undoRedoStateDispatch({
            type:'UNDO'
        });

    }
    

    return (
        <>
            <div className={`${style.operations_button}`}>
                <AddTask 
                    text = {text}
                    handleAddTask = {handleAddTask} 
                    setText = {setText} />
                <Undo 
                    handleUndo={ handleUndo }
                />
            </div>

            <TaskList 
                tasksState = { tasksState }
                handleEditTask = { handleEditTask }
                handleDeleteTask = { handleDeleteTask } 
                style = { style } />
            <div>--
                { undoRedoState.undo.map( (undo:any, index:number) => <div key = {index}>{ undo.task.text } { undo.action }</div>)                    
                }                
            </div> 
            <div>--
                { undoRedoState.redo.map( (redo:any, index:number) => <div key = {index}>{ redo.task.text } { redo.action }</div>)                    
                }                
            </div> 
        </>
    )
}

const taskInitialState: TaskType[] = [
    { id:0, text:'Get the project done', done:false },
    { id:1, text:'Buy an apple.', done:false }
];

const nextidInitialSate:number = taskInitialState.length;
const undoRedoInitialState:UndoRedoState = {
    undo: [],
    redo: []
}
