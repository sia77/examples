import { useContext, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";

function Task({task}:any){
    const [editMode, setEditMode] = useState(false);
    const taskOp = useContext(TasksContext);

    function handleEdit(id:number,e:any){
        taskOp?.dispatch({
            type:'EDIT_TASK',
            id:id,
            text:e.target.value
        })
    }

    return(
        <>
            <div className="edit-save">
                { editMode ? 
                    <div>
                        <input
                            value={ task.text }
                            onChange={
                                (e)=> handleEdit(task.id,e) 
                            }
                            type="text" />
                    </div>:
                    <div>{task.text}</div>             
                }           
            </div>
            <div>
                <button
                    onClick={() => setEditMode(!editMode)}
                >{ editMode ? 'Save' : 'Edit' }</button>
            </div> 
        </>
    )
}

export default function TaskList(){

    const taskOp = useContext(TasksContext);


    function handleDelete(id:number){
        taskOp?.dispatch({
            type:'DELETE_TASK',
            id:id
        })
    }

    function handleToggle(id:number){
        taskOp?.dispatch({
            type:'TOGGLE_CHECKED_TASK',
            id:id
        })
    }

    return (
        <div className="task-list">
        {  
            taskOp?.state.tasks.map(
                (                task: { id: number; done: boolean | undefined; }) => 
                    <div className="task_manager_list_item" key={task.id}>
                        <input 
                            type='checkbox'
                            checked = {task.done}
                            onChange = {
                                () => handleToggle(task.id)                               
                            }
                            />
                        <Task 
                            task = {task} 
                        />
                        <div>
                            <button
                                onClick = {
                                    () => handleDelete(task.id)                                    
                                }
                            >Delete</button>
                        </div>
                    </div>
                    ) 
        }
        </div>
    )
}            