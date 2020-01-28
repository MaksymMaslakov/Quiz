class QuestionsService  {

    _apiBased = 'http://localhost:8080';


    getAllQuestions = async () => {

        // //vars for each time load different questions
        // let sliceLenght = 5;
        // let sliceStart = Math.round(1 + (Math.random()*(1+sliceLenght)));
        // let sliceEnd = sliceStart + sliceLenght;
            // ?_start=${sliceStart}&_end=${sliceEnd}

        const res = await fetch(`${this._apiBased}/questions`);

        if(!res.ok){
            throw new Error(`Could not fetch, received ${res.status}`)
        }

        const body = await res.json();
        return body;

    };

    getQuestion = async (id) => {
        const res = await fetch(`${this._apiBased}/questions/${id}`);

        if(!res.ok){
            throw new Error(`Could not fetch, received ${res.status}`)
        }

        const body = await res.json();
        return body;
    };
}

export default QuestionsService;