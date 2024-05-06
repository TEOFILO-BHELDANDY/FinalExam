import React, { useState } from "react";

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (username === '' || password === '') {
            setErrorMessage('Please enter both username and password');
        } else {
            onLogin(username, password);
            setUsername('');
            setPassword('');
            setErrorMessage('');
        }
    };

    return (
        <div>
            <h1>Login</h1><br/>
            <input
                className="nameinput"
                type="text"
                placeholder="Username"
                value={username} onChange={(e) => setUsername(e.target.value)}
            />
            <br /><br/>
            <input
                className="passinput"
                type="password"
                placeholder="Password"
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br/>
            <button onClick={handleLogin}>Login</button><br/>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}