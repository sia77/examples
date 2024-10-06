export default function TasksReducer(tasks:any, action:any) {
    switch (action.type) {
      case 'added': {
        return [...tasks, {
          id: action.id,
          text: action.text,
          done: false
        }];
      }
      case 'changed': {
        // return tasks.map((t:any) => {
        //   if (t.id === action.task.id) {
        //     return action.task;
        //   } else {
        //     return t;
        //   }
        // });
        return tasks.map( (task:any) => task.id === action.task.id ? action.task: task );
      }
      case 'deleted': {
        return tasks.filter((t:any) => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }