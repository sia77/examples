export default function AddTask({handleAddTask, setText, text}:any){
    return (
        <>
            <input 
                type="text"
                placeholder="Add task"
                onChange = {(e) => setText(e.target.value)}
            />
            <button onClick={() => handleAddTask(text)}>Add</button>
        </>
    )
}