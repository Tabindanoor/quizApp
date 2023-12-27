


import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: [
      { label: 'Paris', isCorrect: true },
      { label: 'Berlin', isCorrect: false },
      { label: 'London', isCorrect: false },
      { label: 'Madrid', isCorrect: false },
    ],
  },
  {
    question: 'What is the capital of Pakistan?',
    options: [
      { label: 'Islamabad', isCorrect: true },
      { label: 'Berlin', isCorrect: false },
      { label: 'London', isCorrect: false },
      { label: 'Madrid', isCorrect: false },
    ],
  },
  {
    question: 'The Amazon Fund” is maintained by which financial institution?',
    options: [
      { label: 'World Bank', isCorrect: false },
      { label: 'IMF', isCorrect: false },
      { label: 'New Development Bank', isCorrect: false },
      { label: 'Brazilian Development Bank', isCorrect: true },
    ],
  },
  {
    question: 'Add one letter ( from the choices) to make new word   "AT"  ?',
    options: [
      { label: 'T', isCorrect: false },
      { label: 'A', isCorrect: false },
      { label: 'Z', isCorrect: false },
      { label: 'C', isCorrect: true },
    ],
  },
  {
    question: 'Full Stack Development Includes?',
    options: [
      { label: 'HTML, CSS, JavaScript', isCorrect: false },
      { label: 'React', isCorrect: false },
      { label: 'MongoDB, Express, React, Node', isCorrect: true },
      { label: 'Express', isCorrect: false },
    ],
  },
  {
    question: 'Where do you wanna go  ?',
    options: [
      { label: 'Germany & London', isCorrect: true },
      { label: 'Italy & France ', isCorrect: false },
      { label: 'America & Africa', isCorrect: false },
      { label: 'China & Japan ', isCorrect: false },
    ],
  },
 
  // Add more questions here...
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (isCorrect) => {
    setSelectedOption(isCorrect);
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
      setScore(score + 1);
    }

    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleQuit = () => {
    setShowScore(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white p-8">
      {showScore ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Quiz Completed!</h1>
          <p className="text-lg">Your Score: {score} / {questions.length}</p>
          <p className="text-lg">Correct: {score} | Incorrect: {questions.length - score}</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{questions[currentQuestion].question}</h1>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`bg-purple-700 p-4 rounded-md transition hover:bg-purple-600 ${
                  selectedOption === option.isCorrect ? 'bg-green-500' : ''
                } ${selectedOption !== null && selectedOption !== option.isCorrect ? 'bg-red-500' : ''}`}
                onClick={() => handleOptionClick(option.isCorrect)}
                disabled={selectedOption !== null}
              >
                {option.label}
              </button>
            ))}
          </div>
          <Transition
            show={selectedOption !== null}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 mr-2"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
              <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-400" onClick={handleQuit}>
                Quit
              </button>
            </div>
          </Transition>
        </div>
      )}
    </div>
  );
};

export default QuizApp;

