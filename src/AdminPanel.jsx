import React, { useState } from "react";
import Login from "./Login";

export default function AdminPanel(props) {
    const [devlogs, setDevlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddDevlog = () => {
        const newDevlog = {
            title: title,
            content: content,
            date: new Date().toISOString().slice(0, 10)
        };
        setDevlogs(prevDevlogs => [...prevDevlogs, newDevlog]);
        setTitle('');
        setContent('');
    };

    const renderAccounts = () => {
        return props.accounts.map((account, id) => (
            <div key={id}>
                <h2 className="accname">{account.username}</h2>
                <p className="accrole">{account.role}</p>
            </div>
        ));
    };

    const renderDevlogHistory = () => {
        return devlogs.map((devlog, index) => (
            <div key={index}>
                <h4>{devlog.title}</h4>
                <p>{devlog.content}</p>
                <p>Date: {devlog.date}</p><br/>
            </div>
        ));
    };

    if (!props.isLoggedIn) {
        return <Login />;
    } else {
        return (
            <div>
                <h1>This is the Admin Panel</h1><br/>
                <h2 className="ac">Current Active Accounts:</h2><br/>
                    <ul>{renderAccounts()}</ul>
                <br />
                <hr />
                <br/>
                <h3>Devlog History:</h3><br/>
                {renderDevlogHistory()}<br/>
                <br/>
                <h2>Admin DevLogs</h2><br/>
                Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <br />
                Content:
                <br />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} cols="50" rows="10"></textarea>
                <br /><br/>
                <button type="button" onClick={handleAddDevlog} className="submit">Submit</button><br/><br/>
                
            </div>
        );
    }
}