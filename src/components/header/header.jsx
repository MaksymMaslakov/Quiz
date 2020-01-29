import React from "react";

import './header.css'

const Header = (props) => {
    return(
        <header className='d-flex flex-column col-8 offset-2'>
            <h1 className='bg-info'
                id="logo">QUIZ</h1>
            <h4 className=''
                id="topic">
                <span className=''>--</span>
                Історія україни
                <span className=''>--</span>
            </h4>
        </header>
    )
};

export default Header