import { useReducer } from 'react';
import Chat from './Chat';
import ContactList from './ContactList';
import { initialState, messengerReducer } from './messengerReducer.js';
import { ContactType, MessagesType } from './Interface'
import './style.css';

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  const messages:MessagesType = state.messages;

  const contact:ContactType | undefined = contacts.find((c) => c.id === state.selectedId);
  
  return (
    <div className='container'>
      <ContactList
        contacts = {contacts}
        selectedId = {state.selectedId}
        dispatch = {dispatch}
      />
      {contact && <Chat
        key = { contact?.id }
        contact = { contact }
        message = { messages[state.selectedId] }
        dispatch = { dispatch }
      />}
    </div>
  );
}

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];
