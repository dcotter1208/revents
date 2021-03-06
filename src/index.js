import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const rootElement = document.getElementById('root');

let render = () => {
    ReactDOM.render(<App />, rootElement)
}

if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
}

render();

registerServiceWorker();
