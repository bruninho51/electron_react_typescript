import React, { useState } from 'react';

import './App.css';
import './App.scss';
import logo from './logo.svg';

function App() {
    const [name, setName] = useState('');

    return (
        <div className='app'>
            <h1>
                Hello World! <img src={logo} width="25" alt="react logo" />
            </h1>
            <div>
                <button onClick={() => {
                    console.log(electron)
                    electron.notificationApi.sendNotification('My custom notification!');
                }}>Notify Test</button>
                <label htmlFor='name'>Test HMR: </label>
                <input
                    id='name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>
    );
}

export default App;