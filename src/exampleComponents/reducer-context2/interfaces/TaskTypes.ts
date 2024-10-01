export interface TaskType {
    id:number,
    name:string,
    done:boolean
}

export interface State {
    tasks: TaskType[],
    nextId: number
}

export interface AddTaskAction{
    type: 'added';
    text: string;
}

export type TaskAction = AddTaskAction;




