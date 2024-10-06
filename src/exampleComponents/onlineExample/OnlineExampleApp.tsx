import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TasksReducer from './Reducer';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    TasksReducer,
    initialTasks
  );

  function handleAddTask(text:string) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task:any) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId:number) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}



let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];