import { useState, useEffect, useRef } from 'react';
import './style.css';

export default function MovingDot(){

    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    const playAreaRef = useRef<HTMLDivElement>(null);
    const [parentElementPosition, setParentElementPosition] = useState<DOMRect | null>(null);

    useEffect(() => {
      if (playAreaRef.current) {
        const rect = playAreaRef.current.getBoundingClientRect();
        setParentElementPosition(rect);
      }
    }, []); // Runs on mount
  
    
  

    function handlePointerMove(e: any) { 
        
        // Calculate position relative to the element
        if(parentElementPosition){
            setPosition({
                x: e.clientX - parentElementPosition.left,
                y: e.clientY - parentElementPosition.top,
            });
        }        
    }

    return (
        <>
            <div ref={playAreaRef} className="playArea" onPointerMove={handlePointerMove}>
                <div 
                    className="redDot"                    
                    style={{transform: `translate(${position.x}px, ${position.y}px)`,}}>
                </div> 
            </div>
        </>
    )
}