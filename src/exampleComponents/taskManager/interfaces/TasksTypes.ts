export interface TaskType {
    id:number,
    text:string | undefined,
    done:boolean,
}

export enum ActionType {
    ADD = "ADD",
    EDIT = "EDIT",
    TOGGLE = "TOGGLE",
    DELETE = "DELETE",
    SAVE = "SAVE"
  }

interface TaskAction {
    task: TaskType;
    index: number;
    actionType: ActionType;
}

export interface AddTaskAction {
    type:'ADD_TASK',
    text:string
}

export interface EditTaskAction {
    type:'EDIT_TASK',
    id:number,
    text:string
}

export interface DeleteTaskAction {
    type: 'DELETE_TASK',
    id: number,
    text?:string | undefined
}

export interface SaveTaskAction {
    type: 'SAVE_TASK',
    id: number,
}

export interface ToggleCheckedTaskAction {
    type: 'TOGGLE_CHECKED_TASK',
    id:number
}

export interface UndoAction {
    type:'UNDO'
}

export interface RedoAction {
    type:'REDO'
}

export interface UnknownAction {
    type:'UNKNOWN'
}

export interface State {
    tasks:TaskType[],
    undoList:TaskAction[],
    redoList:TaskAction[],
    nextId: number
}

export type TasksAction = AddTaskAction | EditTaskAction | DeleteTaskAction | ToggleCheckedTaskAction | UndoAction | RedoAction | UnknownAction |SaveTaskAction;