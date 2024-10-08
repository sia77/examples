import { useContext } from "react"
import { TasksContext } from "../contexts/TasksContext"

export default function UndoRedoOp(){

    const taskOp = useContext(TasksContext)

    function handleUndo(){
        taskOp?.dispatch({
            type:'UNDO'
        })
    }

    function handleRedo(){
        taskOp?.dispatch({
            type:'REDO'
        })
    } 
    return(
        <>
            <button
                onClick={handleUndo}
                disabled={taskOp?.state.undoList.length === 0}
            >Undo</button>
            <button
                onClick={handleRedo}
                disabled={taskOp?.state.redoList.length === 0}
            >Redo</button>
        </>
    )
}