import { useState } from "react";
import { TaskType } from "../interfaces/types";
 


function Task({task, handleEditTask, style}:any){
    const [editMode, setEditMode] = useState(false);
    return (
        <>
            <div className={`${style.task_manager_list_item}`} key = {task.id}>
                {
                    !editMode ? 
                        <div>{task.text}</div> : 
                        <>
                            <input
                            value={task.text}
                            onChange={e => {
                                handleEditTask({
                                ...task,
                                text: e.target.value
                            });
                            }} /> 
                        
                        </>
                }
                <button
                    onClick = { () => setEditMode(!editMode)  }
                >{ !editMode ? 'Edit': 'Save' }</button>
            </div>
        </>
    )
}


export default function TaskList({tasksState, handleEditTask, style}:any){

    return (
        <> 
            {
                tasksState.map((task:TaskType) =>                
                    <Task key = {task.id} task={task} handleEditTask={handleEditTask} style = {style} />
                )
            }
        </>
    );
}