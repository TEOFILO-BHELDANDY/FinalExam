import React, { useState } from 'react';
import Login from './Login';
import Shop from './Shop';
import AdminPanel from './AdminPanel';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');
    const [accounts] = useState([
        { id: 1, username: "customer", password: "customer", role: "customer" },
        { id: 2, username: "administrator", password: "admin", role: "admin" }
    ]);

    const handleLogin = (username, password) => {
        const account = accounts.find(acc => acc.username === username && acc.password === password);
        if (account) {
            setIsLoggedIn(true);
            setRole(account.role);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setRole('');
    };

    return (
        <div className="App">
            {isLoggedIn ? (
                role === 'admin' ? (
                    <AdminPanel isLoggedIn={isLoggedIn} accounts={accounts} />
                ) : (
                    <Shop isLoggedIn={isLoggedIn} groceries={[]} />
                )
            ) : (
                <Login onLogin={handleLogin} />
            )}
            {isLoggedIn && <button onClick={handleLogout} className="logout">Logout</button>}
        </div>
    );
}