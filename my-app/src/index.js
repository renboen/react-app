import React from 'react';
import ReactDOM from 'react-dom';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './componentstyle/css/index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {addLocaleData,IntlProvider } from 'react-intl';
import zh_CN from './lang/cn';
import en_US from './lang/en';
addLocaleData([...en,...zh]);
ReactDOM.render(
<IntlProvider
locale={"zh"}
messages={zh_CN}
>
    <App />
</IntlProvider >
, document.getElementById('root'));
registerServiceWorker();
