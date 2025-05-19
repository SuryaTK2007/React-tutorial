import { useCallback, useState } from "react";
function Contact(){
    const[name, setName]=useState('');
    const[message, setMessage]=useState('');
    const[savedName, setSavedName]=useState('');
    const[submitted, setSubmitted]=useState(false);
    const handleSubmit=useCallback((e)=>{
        e.preventDefault();
        if(name && message){
            const savedName=name;
            setSubmitted(true);
            setMessage('');
            setName('');
            setSavedName(savedName);
        }
    },
    [name, message]
    );
    return(
        <div>
            <h2>Contact us</h2>
            {submitted ?(
                <p>Thank you, {savedName}, for your message</p>
            ):(
               <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input 
                           type="text"
                           value={name}
                           onChange={(e)=>setName(e.target.value)}
                           placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label>Message: </label>
                        <textarea
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                            placeholder="Enter a Message"
                        />
                    </div>
                    <button type="submit">Send</button>
               </form>
            )}
        </div>
    );
}
export default Contact;