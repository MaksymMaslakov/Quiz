import React from 'react';

import './question.css';

const Question = (props) => {
    const { question, index } = props
    return (
        <div className='Box-header'>
            <p className='question'>
                {`${index}. ${question}`}
            </p>
        </div>
    );
};

export default Question;