import React, { useContext } from 'react'
import { QuizContext } from '../contexts/quiz'
import Question from "./Question";

function Quizz() {
      const [quizState, dispatch] = useContext(QuizContext);
      console.log('quizState')
  return (
    <div className="quiz">
      {quizState.showResults && (
            <div className='results'>
                  <div className='congratulations'>Congratulations</div>
                  <div className='results-info'></div>
                  <div>You have completed the quizz</div>
                  <div>You've got {quizState.correctAnswerCount} of  {quizState.questions.length}</div>
                   <div className='next-button' onClick={() => dispatch({type: 'RESTART'})}>Restart</div>
                   </div>
      )}
      {!quizState.showResults && (
            <div>
                   <div className='score'>
            Question {quizState.currentQuestionIndex + 1 }/ {quizState.questions.length}
         
      </div>
      <Question />

      <div 
      className='next-button' 
      onClick={() => dispatch ({ type: 'NEXT_QUESTION'})}>Next question</div>
            </div>
      )}
     
    </div>
  )
}

export default Quizz