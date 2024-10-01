import { useContext } from 'react';
import { TasksContext, TasksDispatchContext } from '../context/TasksContext';
import Task from './Task';

export default function TaskList() {
  const state = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);

  if (!state) return null;

  return (
    <ul>
      {state.tasks.map(task => (
        <li className='reducer-context' key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}