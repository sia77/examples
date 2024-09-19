
import { ChatType } from './Interface'

export default function Chat({contact, message, dispatch}:ChatType) {
  return (
    <section className="chat">
      <textarea
        value = { message }
        placeholder = { 'Chat to ' + contact?.name }
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
            contactId:contact?.id
          });
        }}
      />
      <br />
      <button
        onClick={() => {
          alert(`Sending "${ message }" to ${ contact?.email }`);
          dispatch({
            type: 'sent_message',
          });
        }}>
        Send to {contact?.email}
      </button>
    </section>
  );
}
