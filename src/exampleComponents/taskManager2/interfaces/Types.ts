export interface TaskType {
    id:number,
    text:string,
    done:boolean,
}

export interface AddTaskAction {
    type:'ADD_TASK',
    text:string
}

export interface EditTaskAction {
    type:'EDIT_TASK',
    task:TaskType
}

export interface DeleteTaskAction {
    type: 'DELETE_TASK',
    id: number,
    text?:string | undefined
}

export type ActionType = AddTaskAction | EditTaskAction | DeleteTaskAction;