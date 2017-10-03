import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {

    return (
        <div>
        <h1>Hello there World!</h1>
        <p> Things things thigns things asjdsad</p>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
