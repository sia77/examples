import { State, TaskAction } from '../interfaces/TaskTypes';

export const initialState: State = {
  tasks: [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
  ],
  nextId: 3
};

export function tasksReducer(state: State, action: TaskAction): State {
  switch (action.type) {
    case 'added': 
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.nextId,
            text: action.text,
            done: false
          }
        ],
        nextId: state.nextId + 1
      };
    
    case 'changed': {
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.task.id ? action.task : task
        )
      };
    }
    case 'deleted': {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id)
      };
    }
    // default: {
    //   throw new Error('Unknown action: ' + action.type);
    // }
  }
}