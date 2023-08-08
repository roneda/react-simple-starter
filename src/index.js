import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component that should produce HTML
const App = () => {
  return <div>Hi!</div>;
}

// Show it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));