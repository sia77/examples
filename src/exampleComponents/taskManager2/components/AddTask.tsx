export default function AddTask({handleAddTask, setText, text}:any){
    return (
        <>
            <input 
                type="text"
                value={text}
                placeholder="Add task"
                onChange = {(e) => setText(e.target.value)}
            />
            <button 
                disabled = {text.length === 0}
                onClick={() => handleAddTask(text)}>Add</button>
        </>
    )
}