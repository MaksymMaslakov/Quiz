import React from 'react';

import './question.css';



const Question = (props) => {
    const { index } = props
    return (
        <div className='Box-header'>
            <p className='question'>
                {`${index}. Question`}
            </p>
        </div>
    );
};

export default Question;