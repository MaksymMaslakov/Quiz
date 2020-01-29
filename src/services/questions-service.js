class QuestionsService  {

    _apiBased = 'http://localhost:8080';

    getAllQuestions = async () => {

        const res = await fetch(`${this._apiBased}/questions`);

        if(!res.ok){
            throw new Error(`Could not fetch, received ${res.status}`)
        }

        return await res.json();

    };

    getQuestion = async (id) => {
        const res = await fetch(`${this._apiBased}/questions/${id}`);

        if(!res.ok){
            throw new Error(`Could not fetch, received ${res.status}`)
        }

        return await res.json();
    };
}

export default QuestionsService;