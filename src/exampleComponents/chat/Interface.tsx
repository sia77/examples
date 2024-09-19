export interface ContactType {
    id: number, 
    name: string, 
    email: string
  }; 

export interface ChatType {
    contact?: ContactType | undefined,
    message:string, 
    dispatch: React.Dispatch<any>,
    //message:string
}

export interface Action {
    type: 'changed_selection' | 'edited_message' | 'sent_message',
    contactId:number,
    message:string
}

export type MessagesType = {
    [key: number]: string;
  };

export interface State {
    selectedId: number,
    messages: MessagesType
}