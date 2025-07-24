import React, { useState } from 'react';
import './Sign.css';
import Nav from './Nav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Fix here

function Sign() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate(); 

    const Submit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post("http://127.0.0.1:8088/user/sign", { name, email, password });
            console.log("data", data.data);
            navigate("/"); 
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Nav />
            <div className="sign-container">
                <form className="sign-form" onSubmit={Submit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Enter the Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter the Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter the Password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </>
    );
}

export default Sign;
