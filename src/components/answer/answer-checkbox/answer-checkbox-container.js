import React, {Component} from "react";

import Checkbox from "./checkbox";

import './answer-checkbox.css';

class AnswerCheckboxContainer extends Component{

    handleChange = (e) => {
        const {setUserAnswer,userAnswers, questionItem: {id}} = this.props;

        const optionId = e.target.name;
        const isChecked = e.target.checked;
        let newArr = userAnswers[id] || [];

        isChecked
            ?newArr.push(Number(optionId))
            :newArr = newArr.filter((id) => id !== Number(optionId));


        setUserAnswer(id, newArr)
    };



    render(){
        const {questionItem, userAnswers, rightAnswer, isChangeable} = this.props;
        const { options, id,  } = questionItem;


        return (
            <form className={`form-group col-10 offset-1`}>
                <label htmlFor={`container-${id}`}>
                    Оберіть декілька правильних відповідей

                </label>
                <div id={`container-${id}`}>
                    {
                        options.map( (option) =>
                            <Checkbox
                                isChangeable={isChangeable}
                                rightAnswer={rightAnswer}
                                onChange = { this.handleChange }
                                checked = {
                                    userAnswers[id]
                                        ? !!userAnswers[id].find( id => option.id === id)
                                        : false
                                }
                                option={option}
                                id={id}
                                key={`${id}-${option.id}`}/>)
                    }
                </div>
            </form>
        )
    }


}

export default AnswerCheckboxContainer;