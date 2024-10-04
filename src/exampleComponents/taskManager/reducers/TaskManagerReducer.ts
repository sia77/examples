// ADD_TASK: Adds a new task with the provided text.
// EDIT_TASK: Edits the task's text by id.
// DELETE_TASK: Removes a task from the list by id.
// TOGGLE_TASK: Changes the done status of the task by id.
// UNDO: Moves the current state to future and retrieves the last state from past.
// REDO: Moves the last undone state from future back to tasks and stores the current state in past.

import { State, TasksAction, ActionType } from "../interfaces/TasksTypes";

export function TaskMangerReducer( state:State, action:TasksAction ):State{

    const {undoList, redoList, tasks} = state;

    switch(action.type){
        case 'ADD_TASK':{
            const nextIndex = state.nextId + 1;
            return {
                ...state,
                tasks:[
                    ...tasks,
                    {id:tasks.length, text:action.text, done:false}                    
                ],
                undoList:[...undoList, {task:{id:tasks.length, text:action.text, done:false}, index:nextIndex, actionType:ActionType.ADD}, ],
                nextId: nextIndex                
            } 
        }
 
        case 'DELETE_TASK':{
            const toBeRemoved = tasks.find(task => task.id === action.id);            
            
            if(toBeRemoved){
                return {
                    ...state,
                    undoList: [...undoList, {task:toBeRemoved, index:action.id, actionType:ActionType.DELETE} ],
                    tasks: tasks.filter(task => task.id !== action.id)
                }
            }
            return state;

        } 
        case 'EDIT_TASK':{
            const currentItem = state.tasks.find(el => el.id === action.id)
            const modifiedList = tasks.map( task => task.id === action.id ? { ...task, text:action.text } : task );
            if(currentItem)
                return {
                    ...state,
                    tasks: modifiedList,
                    undoList:[...undoList, {task:currentItem, index:state.nextId, actionType:ActionType.SAVE}]
                }
            return state;
        }

        case 'SAVE_TASK':{

            // console.log("Id: ", action.id);
            // console.log('state: ', state);

            // const savedItem = state.tasks.find(task => task.id === action.id);

            // if( savedItem ){
            //     return {
            //         ...state,
            //         undoList:[...undoList, {task:savedItem, index:state.nextId, actionType:ActionType.SAVE}] 
            //     }
            // }
            return state;

        }

        case "TOGGLE_CHECKED_TASK":{
            const activeList = tasks.map( task => task.id === action.id ? { ...task, done:task.done} : task );
            const activeItem = activeList.find(task => task.id === action.id);
            
            if(activeItem){
                return {
                    ...state,
                    undoList: [...undoList, {task:activeItem, index:action.id, actionType:ActionType.TOGGLE}],
                    tasks: tasks.map( task => task.id === action.id ? { ...task, done:!task.done} : task )
                }
            }
            return state;
        }

        case "UNDO":{

            if (undoList.length === 0) {
                return state; 
            }        
            
            const lastItem = undoList[undoList.length - 1];
            
            switch(lastItem.actionType){
                case ActionType.ADD : {
                    return {
                        ...state,
                        tasks: [
                            ...tasks.slice(0, tasks.length - 1)
                        ],
                        undoList: undoList.slice(0, undoList.length - 1),
                        redoList:[...redoList, lastItem]
                    }
                }
                case ActionType.DELETE :{
                    return {
                        ...state,
                        tasks: [
                            ...tasks.slice(0, lastItem.index), // Tasks before the original index
                            lastItem.task, // The undone task
                            ...tasks.slice(lastItem.index) // Tasks after the original index
                        ],
                        undoList: undoList.slice(0, undoList.length - 1), // Remove the last item from the past
                        redoList:[...redoList, lastItem]
                    };
                }
                case ActionType.SAVE :{                    
                    return {
                        ...state,
                        tasks:[
                            ...tasks.map(task => task.id === lastItem.task.id? lastItem.task : task)
                        ],
                        undoList: undoList.slice(0, undoList.length - 1), 
                        redoList:[...redoList, lastItem]
                    }
                }
                    
                case ActionType.TOGGLE :{
                    return {
                        ...state,
                        tasks:[
                            ...tasks.slice(0,lastItem.index), 
                            lastItem.task, 
                            ...tasks.slice(lastItem.index+1)
                        ],
                        undoList: undoList.slice(0, undoList.length - 1), 
                        redoList:[...redoList, lastItem]
                    };
                } 
                default:
                    return state;
                                   
            }
        }
        case "REDO": {           

            if (redoList.length === 0) {
                return state; 
            }        

            const lastItem = redoList[redoList.length - 1];        
            
            switch(lastItem.actionType){
                case ActionType.ADD : {                    
                    return {
                        ...state,
                        tasks: [
                            ...tasks, lastItem.task
                        ],
                        redoList: redoList.slice(0, redoList.length - 1),
                        undoList:[...undoList, lastItem]
                    }
                }
                case ActionType.DELETE :{
                    //console.log("del");
                    const toBeRemovedList = tasks.filter(task => task.id !== lastItem.task.id)
                    return {
                        ...state,
                        tasks: [
                            ...toBeRemovedList
                        ],
                        redoList: redoList.slice(0, redoList.length - 1), // Remove the last item from the redolist
                        undoList:[...undoList, lastItem]
                    };
                }
                case ActionType.SAVE :{                    
                    return {
                        ...state,
                        tasks:[
                            ...tasks.map(task => task.id === lastItem.task.id? lastItem.task : task)
                        ],
                        redoList: redoList.slice(0, redoList.length - 1), 
                        undoList:[...undoList, lastItem]
                    }
                }
                    
                case ActionType.TOGGLE :{
                    return {
                        ...state,
                        tasks:[
                            ...tasks.slice(0,lastItem.index), 
                            lastItem.task, 
                            ...tasks.slice(lastItem.index+1)
                        ],
                        redoList: redoList.slice(0, redoList.length - 1), 
                        undoList:[...undoList, lastItem]
                    };
                } 
                default:
                    return state;                   
            }
        }    

        default:
            throw new Error(`Unknown action type: ${action.type}`);            
    }

}

