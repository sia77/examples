import { useState } from "react"
import { State, TaskType } from "./interfaces/TasksTypes";
import { useReducer } from "react";
import { TaskMangerReducer } from "./reducers/TaskManagerReducer";
import './style.css';
import AddTask from "./components/AddTask";
import UndoRedoOp from "./components/UndoRedoOp";
import TaskList from "./components/TaskList";



export default function TaskManagerApp(){

    const [tasksState, dispatch] = useReducer(TaskMangerReducer, initialSate);
    const [text, setText] = useState('');
    
 
    function handleAdd(){
        setText('');
        dispatch(
            {
                type:'ADD_TASK',
                text:text
            }
        )
    }

    function handleDelete(id:number){
        dispatch({
            type:'DELETE_TASK',
            id:id
        })
    }

    function handleEdit(id:number, e:any){        
        dispatch({
            type:'EDIT_TASK',
            id:id,
            text:e.target.value
        })
    }

    // function toggleEidtSave(id:number){
    //     setEditMode(!editMode);

    //     // editMode && dispatch({
    //     //     type:'SAVE_TASK',
    //     //     id:id
    //     // })
    // }

    function handleCheckBoxToggle(id:number){
        dispatch({
            type:'TOGGLE_CHECKED_TASK',
            id:id
        })
    }

    function handleUndo(){
        dispatch({
            type:'UNDO'
        })
    }

    function handleRedo(){
        dispatch({
            type:'REDO'
        })
    } 
    
    return(
        <>
            <h1>Task Manager</h1>
            <div className="container">
                <AddTask 
                    text={text} 
                    setText={setText} 
                    handleAdd={handleAdd} />
                <UndoRedoOp 
                    handleUndo = {handleUndo}
                    handleRedo = {handleRedo}
                    tasksState = {tasksState}
                />
            </div>
            <TaskList
                tasksState = {tasksState}
                handleCheckBoxToggle = {handleCheckBoxToggle}
                handleDelete = {handleDelete}
                handleEdit = {handleEdit}
            />

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