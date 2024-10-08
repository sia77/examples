import { ActionType, TaskType } from "../interfaces/Types";


export function TaskReducer(taskState:TaskType[], action:ActionType){

    // console.log("state: ", taskState);
    // console.log("action: ", action);

    switch(action.type){
        case 'ADD_TASK':{
          return [...taskState, {id:action.id, text:action.text, done:false}]
        }
        case 'EDIT_TASK':{
          return taskState.map( task => task.id === action.task.id ? action.task: task );
        }
        case 'DELETE_TASK':{
          return taskState.filter(task => task.id !== action.id)
        }
        // default :
        //   throw new Error(`Unknown action type: ${action.type}`);
    }
}

