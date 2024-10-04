import { Key, useState } from "react";

export default function TaskList({tasksState, handleCheckBoxToggle, handleDelete, handleEdit}:any){


    function Task({task, handleEdit}:any){
        const [editMode, setEditMode] = useState(false);
        console.log("editMode: ", editMode);

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

    return (
        <div className="task-list">
        {  
            tasksState.tasks.map(
                (                task: { id: Key | null | undefined; done: boolean | undefined; }) => 
                    <div className="task-manager-list-item" key={task.id}>
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