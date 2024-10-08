import { TaskType } from "./Types";

export enum UndoRedoActionType {
    ADD = "ADD",
    EDIT = "EDIT",
    TOGGLE = "TOGGLE",
    DELETE = "DELETE",
    SAVE = "SAVE"
}

export interface UndoRedoType {
    task:TaskType,
    action: UndoRedoActionType
}

export interface TrackUndoAction {
    type:'TRACK_UNDO',
    undoTask: UndoRedoType
}

export interface UndoAction {
    type:'UNDO',
    //undoTask?: UndoRedoType
}


export interface UndoRedoState {
    undo:UndoRedoType[],
    redo:UndoRedoType[]
}




