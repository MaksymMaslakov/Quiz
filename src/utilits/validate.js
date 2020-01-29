import { isEqual } from 'lodash';

const validation = (userAnswer, rightAnswer, incrementScore ) => {
    if(Array.isArray(rightAnswer) && userAnswer){
        if(isEqual(userAnswer.sort(),rightAnswer)){
            rightAnswer.map(() => incrementScore());
            return true;
        }
        else return false
    }

    if(userAnswer === rightAnswer && rightAnswer !== undefined){
        incrementScore();
        return true;
    }
    return false;
};



export default validation;

