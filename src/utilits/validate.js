const validation = (userAnswer, rightAnswer, incrementScore) => {
    console.log("userAnswer: ", userAnswer, "rightAnswer", rightAnswer );
    if(userAnswer === rightAnswer){
        incrementScore();
        return true;
    }
    return false;
};



export {
    validation
}

