import React from "react";

import AnswerTextInput from "./answer-textinput";
import AnswerRadioButton from './answer-radiobutton';

import './answer.css'

const hintFromTypeQuestion = {
    'textinpit': 'введите правильный ответ',
    'radio-button': 'выберите один правильный ответ',
    'checkbox': 'выберите несколько правильных ответов',
    'select': 'выберите один правильный ответ'
};

const question = {
    "id":  9,
    "type": "radio-button",
    "question": "«Космічну еру» в історії людства започатковано",
    "options": [
        "першим польотом людини в космос",
        "висадкою першої людини на Місяці за програмою «Aполлон»",
        "запуском людиною першого штучного супутника Землі",
        "успішним випробуванням людиною першої балістичної ракети"
    ],
    "right-answer":  "запуском людиною першого штучного супутника Землі"
};

const score = 0;

const Answer = (props) => {

    const type = 'textinpit';
        // {`${hintFromTypeQuestion[type]}`}
    return (
        <div className='Box-body'>
            <AnswerTextInput {...question} score={score}/>
        </div>
    )
};

export default Answer;







