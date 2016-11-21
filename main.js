import Hello from './hello.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toolbox/lib/commons.scss'; 

import store from './redux/create-store.js';

ReactDOM.render(<Hello store={store} />, document.getElementById('main'));