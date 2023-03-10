import React, {useState} from "react";
import questions from './data'
import Question from "./Question";

const Questions = ()=> {
    const [quiz, setQuiz] = useState (questions);
   console.log(quiz)
   
    return (
        <div className="max-w-3xl mx-auto my-16 p-4 shadow-neutral-300 shadow-md rounded-md flex flex-row">
            <h1 className="w-1/2 text-3xl font-bold">Questions and Answers about Login</h1>
            <div className="w-2/3 border-l border-l-slate-300  px-2">
                {
                    quiz.map(question => {
                        return <Question key={question.id} {...question} />
                    })
                }
            </div>
        </div>
    )
}
export default Questions;