import { useReducer } from 'react';
import { tasksReducer, initialState } from './reducers/TasksReducer';
import { TasksContext, TasksDispatchContext } from './context/TasksContext';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export default function ReducerContext() {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <TasksContext.Provider value={state}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>Task List</h1>
        <AddTask />
        <TaskList />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
