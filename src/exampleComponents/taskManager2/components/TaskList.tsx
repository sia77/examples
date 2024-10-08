import { useState } from "react";
import { TaskType } from "../interfaces/Types";
 


function Task({task, handleEditTask, handleDeleteTask, style}:any){
    const [editMode, setEditMode] = useState(false);
    return (
        <>
            <div className={`${style.task_manager_list_item}`}>
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
                                <button
                    onClick = { () =>handleDeleteTask(task) }
                >Delete</button>
            </div>
        </>
    )
}


export default function TaskList({tasksState, handleEditTask, handleDeleteTask, style}:any){

    return (
        <> 
            {
                tasksState.map((task:TaskType) =>                
                    <Task key = {task.id} task={task} handleEditTask={handleEditTask} handleDeleteTask = {handleDeleteTask} style = {style} />
                )
            }
        </>
    );
}