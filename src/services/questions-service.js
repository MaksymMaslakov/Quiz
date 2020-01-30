import { BASE_URL } from "../constants/config";

class QuestionsService  {


    getAllQuestions = async () => {

        const res = await fetch(`${BASE_URL}/questions`);

        if(!res.ok){
            throw new Error(`Could not fetch, received ${res.status}`)
        }

        return await res.json();

    };

    getQuestion = async (id) => {
        const res = await fetch(`${BASE_URL}/questions/${id}`);

        if(!res.ok){
            throw new Error(`Could not fetch, received ${res.status}`)
        }

        return await res.json();
    };
}

export default QuestionsService;