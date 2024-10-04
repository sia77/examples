export default function UndoRedoOp({handleUndo, handleRedo, tasksState}:any){
    return(
        <>
            <button
                onClick={handleUndo}
                disabled={tasksState.undoList.length === 0}
            >Undo</button>
            <button
                onClick={handleRedo}
                disabled={tasksState.redoList.length === 0}
            >Redo</button>
        </>
    )
}