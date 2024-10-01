
import { useContext  } from "react";
import { LevelContext } from './LevelContext';
import './style.css';




export default function Section({children, isFancy}:any){

    const level = useContext(LevelContext);

    return (
        <section className = { 'section ' + (isFancy ? 'fancy' : '') }>
            <LevelContext.Provider value = { level + 1 }>
            {children}
            </LevelContext.Provider>            
        </section>
    )

}