import { IncreaseNextIdAction } from "../interfaces/Types";


export function NextIdReducer(nextIdState:number, action:IncreaseNextIdAction){
    switch(action.type){
        case 'INCREASE_ID':{
            return nextIdState + 1        }
    }
}