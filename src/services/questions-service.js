class QuestionsService  {

    _apiBased = 'http://localhost:4444';


    getAllQuestions = async () => {

        // //vars for each time load different questions
        // let sliceStart = Math.round(1 + (Math.random()*6));
        // let sliceEnd = sliceStart+5;
        //     // ?_start=${sliceStart}&_end=${sliceEnd}

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