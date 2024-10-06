import { useReducer, useState } from "react";
import AddTask from "./components/AddTask";
import './style.css';
import { TaskReducer } from "./reducers/TaskReducer";
import { Task} from "./interfaces/types";
import TaskList from "./components/TaskList";

export default function TaskManagerApp2(){

    const [text, setText] = useState('');
    const [tasksState, dispatch] = useReducer(TaskReducer,taskInitialState)


    function handleAddTask(text:string){
        //Add text
        dispatch({
            type:'ADD_TASK',
            text:text
        })
    }

    function handleEditTask(task:Task){
        dispatch({
            type:'EDIT_TASK',
            task
        })
    }

    return (
        <>
            <AddTask 
                text = {text}
                handleAddTask = {handleAddTask} 
                setText = {setText} />
            <TaskList 
                tasksState = {tasksState}
                handleEditTask = {handleEditTask} />
        </>
    )
}

const taskInitialState: Task[] = [
    {id:0, text:'Get the project done', done:false},
    {id:1, text:'Buy an apple.', done:false}
];