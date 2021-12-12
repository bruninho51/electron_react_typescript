import React from 'react';

import '../../scss/about.scss';

const App = function App() {

  return (
    <div className="container">
      <img className="icon" src="../assets/icon.png" />
      <h1>Explore English</h1>
      <p>
        Explorenglish is a platform created to increase your understanding of the English language through videos and spaced repetition.
      </p>
      <span className="version"><b>version:</b> alpha</span>
    </div>
  )
}

export default App;
