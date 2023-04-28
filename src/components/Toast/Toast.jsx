import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'

const Toast = () => {
    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
        </div>
    );
}

export default Toast

function App() {
    const notify = () => toast("Wow so easy!");

    
}