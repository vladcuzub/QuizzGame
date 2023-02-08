import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quizz from './components/Quizz';
import { QuizProvider } from './contexts/quiz';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizProvider>
    <Quizz />
    </QuizProvider >
  </React.StrictMode>
);

