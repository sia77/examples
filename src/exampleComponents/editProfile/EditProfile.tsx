

import { useState } from 'react';
import { BasicButton } from './../../components/buttons/Buttons';
import './style.css'

export default function EditProfile(){

    const [ firstName, setFirstName ] = useState('John');
    const [ lastName, setLastName ] = useState('Smith');
    const [ editMode, setEditMode ] = useState(true);

    function toggle(e:any){
        e.preventDefault();
        setEditMode(!editMode);
    }
    

    function handleName(e:any){
        e.target.name === "firstName" ? setFirstName(e.target.value) : setLastName(e.target.value)
    }

    return (

        <>
            <form onSubmit={toggle}>
                <div className="container">
                    <div>
                        <div>First Name:</div>
                        <div>
                            {
                                editMode ?
                                <input
                                name="firstName" 
                                value={ firstName } 
                                onChange={handleName}/> :
                                firstName
                            }                        
                        </div>
                    </div>
                    <div>
                        <div>Last Name:</div>
                        <div>
                            {
                                editMode ? 
                                <input 
                                name="lastName"
                                value={ lastName }
                                onChange={handleName} /> :
                                lastName 
                            }                        
                        </div>
                    </div>
                    <div className='button-container'>
                        <BasicButton>
                            {editMode? 'Save':'Edit'} Profile
                        </BasicButton>
                    </div>
                    <div className="greeting-container">
                        <div className='greeting message'> Hello, { firstName } { lastName } </div>
                    </div>
                </div>
            </form>
        </>
    )
}