
import axios from 'axios';
import React, { useState } from 'react';
import './style.css';


const Form=() => {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState("");
    const [batch, setBatch] = useState("");
    const [section, setSection] = useState("");

    const formSubmit = ()=>{
       

        let data = {
            name:setName,
            id:setId,
            email:setEmail,
            batch:setBatch,
            section:setSection
        }

        axios.post('/api/form',data)
        .then(res =>{
            this.setState({
                sent:true
            })
        })
        .catch(() => console.log("not sent"))
    }
   
    return (
        <>
             
            <form onSubmit={formSubmit()}>
            <input id="input-1" type="text" name='name' placeholder="John Doe" required  onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="input-1">
                <span className="label-text">Full Name</span>
                <span className="nav-dot"></span>
                <div className="signup-button-trigger">Sign Up</div>
            </label>
            <input id="input-2" name="id" type="text" placeholder="CSE XXX XXXXX" required  onChange={(e)=>setId(e.target.value)} />
            <label htmlFor="input-2">
                <span className="label-text">Id</span>
                <span className="nav-dot"></span>
            </label>
            <input id="input-3" name='email' type="email" placeholder="email@address.com" required onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="input-3">
                <span className="label-text">Email</span>
                <span className="nav-dot"></span>
            </label>
            <input id="input-4" name='batch' type="text" placeholder="000" required onChange={(e)=>setBatch(e.target.value)} />
            <label htmlFor="input-4">
                <span className="label-text">Batch</span>
                <span className="nav-dot"></span>
            </label>
            <input id="input-5" name='section' type="text" placeholder="X" required onChange={(e)=>setSection(e.target.value)} />
            <label htmlFor="input-5">
                <span className="label-text">Section</span>
                <span className="nav-dot"></span>
            </label>
            <button type="submit">Send</button>
            <p className="tip">Press Tab</p>
            <div className="signup-button">Send Mail</div>
            </form>
        </>
        
    )
}

export default Form
