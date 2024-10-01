import { useState } from "react"
import { State } from "./interfaces/TasksTypes";
import { useReducer } from "react";
import { TaskMangerReducer } from "./reducers/TaskManagerReducer";
import './style.css';



export default function TaskManagerApp(){

    const [tasksState, dispatch] = useReducer(TaskMangerReducer, initialSate);
    const [text, setText] = useState('');
    const [editMode, setEditMode] = useState(false);
 
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

    function toggleEidtSave(id:number){
        setEditMode(!editMode);

        editMode && dispatch({
            type:'SAVE_TASK',
            id:id
        })
    }

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
                <input 
                    type = "text"
                    placeholder="Type something..."
                    value = {text} 
                    onChange = {(e) => setText(e.target.value)}
                    />
                <button
                    onClick={handleAdd}
                    disabled={text.length === 0}
                >Add</button>
                <button
                    onClick={handleUndo}
                    disabled={tasksState.undoList.length === 0}
                >Undo</button>
                <button
                    onClick={handleRedo}
                    disabled={tasksState.redoList.length === 0}
                >Redo</button>
            </div>
            <div className="task-list">
                {  
                    tasksState.tasks.map(
                        task => 
                            <div className="task-manager-list-item" key={task.id}>
                                <input 
                                    type='checkbox'
                                    checked={task.done}
                                    onChange={()=>handleCheckBoxToggle(task.id)}
                                    />
                                <div className="edit-save">
                                    { editMode ? 
                                        <div>
                                            <input
                                                value={ task.text }
                                                onChange={(e)=> handleEdit(task.id,e)}
                                                type="text" />
                                        </div>:
                                        <div>{task.text}</div>             
                                    }           
                                </div>
                                <div>
                                    <button
                                        onClick={(e) => toggleEidtSave(task.id)}
                                    >{ editMode ? 'Save' : 'Edit' }</button>
                                </div>                                
                                <div>
                                    <button
                                        onClick={() => handleDelete(task.id)}
                                    >Delete</button>
                                </div>
                            </div>) 
                }
            </div>
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