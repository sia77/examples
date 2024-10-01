
  export interface TaskType {
    id: number;
    text: string;
    done: boolean;
  }
  
  export interface State {
    tasks: TaskType[];
    nextId: number;
  }
  
  export interface AddTaskAction {
    type: 'added';
    text: string;
  }
  
  export interface ChangeTaskAction {
    type: 'changed';
    task: TaskType;
  }
  
  export interface DeleteTaskAction {
    type: 'deleted';
    id: number;
  }
  
  export type TaskAction = AddTaskAction | ChangeTaskAction | DeleteTaskAction;