import React from 'react';

const App = function App() {

    return (
      <>
        <h1>I am App aa Component!</h1>
        <button onClick={() => {
          electron.notificationApi.sendNotification('My custom notification!');
        }}>Notify</button>
      </>
    )
}

export default App;