

import { useState } from 'react';
import { BasicButton } from './../../components/buttons/Buttons';
import './style.css'

export default function EditProfile(){

    const [ firstName, setFirstName ] = useState('John');
    const [ lastName, setLastName ] = useState('Smith');
    const [ buttonLabel, setButtonLabel ] = useState('Edit Profile');
    const [ isSaved, setIsSaved ] = useState(true);

    function toggle(){
        const isEditMode = buttonLabel === "Edit Profile";
        setIsSaved(!isEditMode);
        setButtonLabel(isEditMode ? "Save Profile" : "Edit Profile");
    }

    function handleName(e:any){
        e.target.name === "firstName" ? setFirstName(e.target.value) : setLastName(e.target.value)
    }

    return (

        <>
            <div className="container">
                <div>
                    <div>First Name:</div>
                    <div>
                        {
                            !isSaved ?
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
                        {!isSaved? <input 
                            name="lastName"
                            value={ lastName }
                            onChange={handleName} /> :
                            lastName 
                        }
                        
                    </div>
                </div>
                <div className='button-container'>
                    <BasicButton
                        onClick={toggle}
                    >{buttonLabel}</BasicButton>
                </div>
                <div className="greeting-container">
                    <div className='greeting message'> Hello, { firstName } { lastName } </div>
                </div>
                
                
            </div>

        </>
    )
}