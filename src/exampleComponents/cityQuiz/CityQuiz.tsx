import { useState } from 'react';
import { BasicButton } from '../../components/buttons/Buttons';

export default function CityQuiz(){

    const [ status, setStatus ] = useState('empty');
    const [ answer, setAnswer ] = useState('');
    const [ error, setError ] = useState(null)
 
    function handleTextAreaKeyDown(){
        setStatus('typing');
        setError(null);
    }

    async function handleSubmit(e:any){
        e.preventDefault();
        setStatus('submittin');

        try{
            await submitForm(answer);
            console.log("done");
            setStatus('success');
        }catch(err:any){
            setStatus('empty');
            setError(err);
        }
    }

    function handleChange(e:any){
        setAnswer(e.target.value)
    }

    if(status === "success"){
        return <h1>That's right!</h1>
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea 
                    disabled = { status === 'submitting' }
                    onKeyDown={ handleTextAreaKeyDown }
                    onChange = { handleChange }
                    value = { answer } 
                 />
                <br />
                <button 
                    disabled = { status === 'submitting' || status === 'empty' }
                    onClick={handleSubmit}
                >
                    Submit</button>
                {error !== null && 
                    <p className="error">
                        {error['message']}
                    </p>
                }
            </form>
        </>
    )

    //Simulate network
    function submitForm(answer:string){
        return new Promise((resolve, reject) => {

            setTimeout(()=>{
                let error =  answer.toLowerCase() !== "lima";
                if(error){
                    reject(new Error('Good guess but a wrong answer. Try again!'))
                }else{
                    resolve('success');
                }
            }, 1500)

        })
    }
}