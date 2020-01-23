class QuestionsService  {

    _apiBased = 'http://localhost:3000';

    getQuestions = async () => {
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