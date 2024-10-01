import { State, TaskAction } from "../../reducer-context2/interfaces/TaskTypes";

export const initialTasksList = {
    tasks:[
    {id:0, name:"Visit Market", done:false},
    {id:1, name:"Buy a note book", done:false},
    {id:2, name:"Eat something", done:false}    
],
nextId:3
}



export function TasksReducer(state:State, action:TaskAction ){

    const {type} = action;

    switch(type){

        case 'added':{
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {id:state.nextId, name:action.text, done:false}  
                ],
                nextId: state.nextId +1 

            }
        }

    }
    


}