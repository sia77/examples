import { useState, useContext } from 'react';
import { TasksDispatchContext } from '../context/TasksContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        if (dispatch) {
          dispatch({ type: 'added', text });
        }
      }}>Add</button>
    </>
  );
}