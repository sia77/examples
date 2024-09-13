
import './style.css'

export function BasicButton({children, onClick}:any){

    return (
        <button className="btn" onClick={onClick}>{children}</button>
    )
}