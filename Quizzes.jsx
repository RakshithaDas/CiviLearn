// CiviLearn - Quizzes.jsx (Extended Quiz System)
import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: 'What does RTI stand for?',
    options: ['Right to Inherit', 'Right to Information', 'Right to Involve', 'Right to Immunity'],
    answer: 'Right to Information'
  },
  {
    question: 'At what age can you vote in India?',
    options: ['16', '18', '21', '25'],
    answer: '18'
  },
  {
    question: 'Which Article of the Indian Constitution guarantees the Right to Education?',
    options: ['Article 15', 'Article 21A', 'Article 370', 'Article 19'],
    answer: 'Article 21A'
  },
  {
    question: 'Which government body conducts elections in India?',
    options: ['Supreme Court', 'Election Commission', 'Lok Sabha', 'President'],
    answer: 'Election Commission'
  },
  {
    question: 'What does RTE stand for?',
    options: ['Right to Employment', 'Right to Education', 'Right to Environment', 'Right to Equality'],
    answer: 'Right to Education'
  },
  {
    question: 'Who is considered the "Father of the Indian Constitution"?',
    options: ['Jawaharlal Nehru', 'B. R. Ambedkar', 'Mahatma Gandhi', 'Sardar Patel'],
    answer: 'B. R. Ambedkar'
  },
  {
    question: 'Which of these is a Fundamental Duty?',
    options: ['Right to Property', 'Protect natural environment', 'Right to Vote', 'Right to Privacy'],
    answer: 'Protect natural environment'
  },
  {
    question: 'What is the minimum age to contest for Lok Sabha elections in India?',
    options: ['18', '21', '25', '30'],
    answer: '25'
  }
];

export default function Quizzes() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="container p-4">
      <div className="quiz-wrapper container p-4">
      <h2 className="text-2xl font-bold mb-4">🎯 Civic Quiz</h2>
      {showResult ? (
        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="text-xl">You scored {score} out of {questions.length}</h3>
          <button onClick={() => { setScore(0); setCurrent(0); setShowResult(false); }}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Try Again</button>
        </div>
      ) : (
        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">{questions[current].question}</h3>
          <ul className="space-y-2">
            {questions[current].options.map((option, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left border p-2 rounded hover:bg-blue-50"
                >{option}</button>
              </li>
            ))}
          </ul>
        </div>
        
      )}
      </div>
    </div>
    
  );
}