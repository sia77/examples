import { useState } from "react";
import './Accordion.css'


export default function Accordion({children, title="Example", description}:any){

    const [displayStatus, setDisplayStatus] = useState('none');
    

    function Toggle(e:any){
        setDisplayStatus(displayStatus === 'none' ? 'block': 'none');
    }


    return (
        <>
            <div className="accordionTitle" onClick={(e)=>Toggle(e)}>
                <span className={`material-symbols-outlined ${displayStatus ==='block'?' arrowDown':'arrowForward'}`} >
                chevron_right
                </span>
                <span>{title}</span>
                
            </div>
            <div className="accordionContent" style={{display:displayStatus}}>
            <div className="description">{description}</div>
                {children}
            </div>
            
        </>
    )
}