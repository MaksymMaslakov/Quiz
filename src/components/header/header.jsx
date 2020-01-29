import React from "react";

import './header.css'

const Header = () => {
    return(
        <header className='d-flex flex-column col-8 offset-2'>
            <h1 className='bg-info'
                id="logo">QUIZ</h1>
            <h4 className=''
                id="topic">
                -- Історія україни --
            </h4>
        </header>
    )
};

export default Header