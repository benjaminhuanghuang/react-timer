import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './res/flute_c_long_01.wav';

import TimerWrapper from './components/TimerWrapper';

ReactDOM.render(<TimerWrapper />, document.getElementById('timer-app'));
