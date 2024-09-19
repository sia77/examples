import { Action, State } from './Interface'

export const initialState: State = {
    selectedId: 0,
    messages: {
        0: 'Hello Taylor',
        1: 'Hello Alice',
        2: 'Hello Bob'
    },
  };
  
  export function messengerReducer(state:State, action:Action) {
    const {type} = action;
    
    switch (type) {
      case 'changed_selection': {
        return {
          ...state,
          selectedId: action.contactId,
          message: state.messages[action.contactId],
        };
      }
      case 'edited_message': {
        
        return {
            ...state,
            messages: {
              ...state.messages, 
              [action.contactId]: action.message, 
            }
          };
      }
      case 'sent_message': {
        return {
            ...state, 
            messages: {
                ...state.messages,
                [action.contactId]:''
            }
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  