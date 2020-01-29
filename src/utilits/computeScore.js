import validation from "./validate";

const computeScore = (userAnswers = {}, questionList = [], incrementScore = () => console.log(incrementScore)) => {

    for(let answerId in userAnswers){
        let item = questionList.find( (question) =>  {return    question.id === Number(answerId) }) || false;

        //item && ...
        if(item) validation(userAnswers[answerId], item.rightAnswer, incrementScore)
    }
    return 1;
};

export default computeScore;