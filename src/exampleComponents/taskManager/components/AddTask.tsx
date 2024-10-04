

export default function AddTask({text, setText, handleAdd}:any){

    return (
        <>
            <input 
                type = "text"
                placeholder="Type something..."
                value = {text} 
                onChange = {(e) => setText(e.target.value)}
                />
            <button
                onClick={handleAdd}
                disabled={text.length === 0}
            >Add</button>
        </>

    );

}