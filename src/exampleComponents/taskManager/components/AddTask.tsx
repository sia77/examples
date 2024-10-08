import { useContext, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";

export default function AddTask(){

    const tasks = useContext(TasksContext);
    const [text, setText] = useState('');

    function handleAdd(text:string){
        setText('');
        tasks?.dispatch(
            {
                type:'ADD_TASK',
                text:text
            }
        )
    }

    return (
        <>
            <input 
                type = "text"
                placeholder="Type something..."
                value = {text} 
                onChange = {(e) => setText(e.target.value)}
                />
            <button
                onClick={ () =>{                    
                    handleAdd(text);                    
                } }
                disabled={ text.length === 0 }
            >Add</button>
        </>
    );
}