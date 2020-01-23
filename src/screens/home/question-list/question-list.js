import React from 'react';

import QuestionBox from "./question-box/question-box";

import "./question-list.css"

const questions = [
    {
        id:  9,
        type: "radio-button",
        question: "«Космічну еру» в історії людства започатковано",
        options: [
            "першим польотом людини в космос",
            "висадкою першої людини на Місяці за програмою «Aполлон»",
            "запуском людиною першого штучного супутника Землі",
            "успішним випробуванням людиною першої балістичної ракети"
        ],
        rightAnswer:  "запуском людиною першого штучного супутника Землі"
    },
    {
        id:  9,
        type: "select",
        question: "«Космічну еру» в історії людства започатковано",
        options: [
            "першим польотом людини в космос",
            "висадкою першої людини на Місяці за програмою «Aполлон»",
            "запуском людиною першого штучного супутника Землі",
            "успішним випробуванням людиною першої балістичної ракети"
        ],
        rightAnswer:  "запуском людиною першого штучного супутника Землі"
    }
];

const QuestionList = (props) => {

    // const { questions } = props;

    // const questions = ['1','2'];
    return (
        <ul className='Box col-10 offset-1'
            id='question-list'>
            {
                questions.map( (questionItem, idx) =>
                    <QuestionBox className='Box col-10 offset-2'
                                 questionItem={questionItem}
                                 index={idx+1}
                                 key={idx}/>)
            }
        </ul>
    );
};

export default QuestionList;