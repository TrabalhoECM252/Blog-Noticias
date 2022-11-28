import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('#root')
)