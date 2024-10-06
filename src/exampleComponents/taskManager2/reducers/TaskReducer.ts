import { ActionType, Task } from "../interfaces/types";


export function TaskReducer(taskState:Task[], action:ActionType){

    console.log("state: ", taskState);
    console.log("action: ", action);

    switch(action.type){
        case 'ADD_TASK':{
            return [...taskState, {id:2, text:action.text, done:false}]
        }
        case 'EDIT_TASK':{
            console.log("hello")
            return taskState.map((t:any) => {
                if (t.id === action.task.id) {
                  return action.task;
                } else {
                  return t;
                }
              });
            //return taskState.map( task => task.id === action.task.id ? action.task: task );
        }
        default :
            throw new Error(`Unknown action type: ${action.type}`);
    }    

}


// case 'changed': {
//     return tasks.map((t:any) => {
//       if (t.id === action.task.id) {
//         return action.task;
//       } else {
//         return t;
//       }
//     });
//   }