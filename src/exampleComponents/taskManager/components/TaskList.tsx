import { Key, useState } from "react";

function Task({task, handleEdit}:any){
    const [editMode, setEditMode] = useState(false);

    return(
        <>
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
                    onClick={() => setEditMode(!editMode)}
                >{ editMode ? 'Save' : 'Edit' }</button>
            </div> 
        </>
    )
}

export default function TaskList({tasksState, handleCheckBoxToggle, handleDelete, handleEdit}:any){




    return (
        <div className="task-list">
        {  
            tasksState.tasks.map(
                (                task: { id: Key | null | undefined; done: boolean | undefined; }) => 
                    <div className="task_manager_list_item" key={task.id}>
                        <input 
                            type='checkbox'
                            checked = {task.done}
                            onChange = {()=>handleCheckBoxToggle(task.id)}
                            />
                        <Task 
                            task = {task} 
                            handleEdit =  {handleEdit} />
                        <div>
                            <button
                                onClick={() => handleDelete(task.id)}
                            >Delete</button>
                        </div>
                    </div>
                    ) 
        }
        </div>
    )
}            