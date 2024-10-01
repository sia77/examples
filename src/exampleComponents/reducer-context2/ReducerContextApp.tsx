import { useState } from "react";
import AddTask from "./components/AddTask";
import './style.css';


export default function ReducerContextApp(){



    
    //const [tasks, setTasks] = useState(initialTasksList);
    const [taskId, setTaskId] = useState(3);
    const [editMode, setEditMode] = useState(false);



    function handleRemove(id:number){
        // setTasks(tasks.filter(task => {
        //     return (
        //         task.id !== id 
        //     )
        // }))
    }


    function handleEdit(id:any){
        console.log("id: ", id);
        setEditMode(!editMode);
    }

    function handleTextEdit(text:string, id:number){

        // setTasks(prevState => {
        //     return (
        //         prevState.map(
        //             task => {
        //                 return( task.id === id ? {...task, name:text} : task )
        //             }
        //         )
        //     );
        // })
    }


    return (
        <>
            <h1>Tasks List</h1>
            <AddTask />

            <ul className="tasks-list">
                {/* {
                    tasks.map(
                        (task:any) => {
                            return (
                            <li key = {task.id} className="task-row">

                                { !editMode ? 
                                <div>{task.name}</div> :
                                <div>
                                     
                                    <input 
                                        type = "text"
                                        value = { task.name }
                                        onChange={ (e) => {
                                                handleTextEdit(e.target.value, task.id)
                                            } 
                                        }
                                        />
                                </div>
                                }
                                <div>
                                    <button
                                        onClick={
                                            () => {
                                                handleEdit(task.id);
                                            }
                                        }
                                        >{ editMode ? 'Save' : 'Edit' }</button>
                                </div>
                        
                                <div>
                                    <button
                                        onClick = {() => handleRemove(task.id)}
                                        >Delete</button>
                                </div>
                            </li>)
                        })
                } */}

            </ul>
        </>
    );


}