import { TrackUndoAction, UndoAction, UndoRedoState } from "../interfaces/UndoRedoTypes";


export function UndoRedoReducer(undoRedoState:UndoRedoState, action:TrackUndoAction | UndoAction ){

    console.log("undoRedoState: ", undoRedoState);
    console.log("action: ", action);

    

    switch(action.type){
        case 'TRACK_UNDO':{            
            return {...undoRedoState, undo: [...undoRedoState.undo, action.undoTask] }
        }

        case 'UNDO':{
            if( undoRedoState.undo.length === 0 ){
                return undoRedoState;
            }

            const lastItem = undoRedoState.undo[ undoRedoState.undo.length - 1];

            return {...undoRedoState,
                undo:undoRedoState.undo.slice(0, undoRedoState.undo.length - 1),
                redo:[...undoRedoState.redo, lastItem]
            }
        }

        default:
            return undoRedoState;
    }

}


