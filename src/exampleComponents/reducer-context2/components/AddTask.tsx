import { useState } from "react";

export default function AddTask(){

    const [text, setText] = useState("");


    function handleAdd(){

        
        
        // setTasks(prev => {
        //     return (
        //         [
        //             ...prev,
        //             {id: taskId, name:text}
        //         ]
        //     );
        // })
    }

    return(
        <>
            <input 
                type = "text"
                placeholder = "Add task"
                value = {text} 
                onChange = { e => setText(e.target.value) }
            />
            <button onClick = { 
                () => {
                    setText('');
                    handleAdd();
                }                
            }>Add</button>
        </>
    )
}