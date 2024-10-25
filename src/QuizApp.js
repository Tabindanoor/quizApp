import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';



const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const { width, height } = useWindowSize();


  
  const handleOptionClick = (isCorrect, index) => {
    setSelectedOption(index);
    if (isCorrect) {
      toast.success('Correct Answer!');
      setScore(score + 1);
    } else {
      toast.error('Wrong Answer!');
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
      setConfettiVisible(true);  // Show confetti on completion
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setConfettiVisible(false); // Reset confetti visibility
  };


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
      { label: 'Karachi', isCorrect: false },
      { label: 'Lahore', isCorrect: false },
      { label: 'Peshawar', isCorrect: false },
    ],
  },
  {
    question: 'The Amazon Fund is maintained by which financial institution?',
    options: [
      { label: 'World Bank', isCorrect: false },
      { label: 'IMF', isCorrect: false },
      { label: 'New Development Bank', isCorrect: false },
      { label: 'Brazilian Development Bank', isCorrect: true },
    ],
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: [
      { label: 'Earth', isCorrect: false },
      { label: 'Mars', isCorrect: true },
      { label: 'Jupiter', isCorrect: false },
      { label: 'Saturn', isCorrect: false },
    ],
  },
  {
    question: 'What is the largest mammal in the world?',
    options: [
      { label: 'Elephant', isCorrect: false },
      { label: 'Blue Whale', isCorrect: true },
      { label: 'Giraffe', isCorrect: false },
      { label: 'Great White Shark', isCorrect: false },
    ],
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: [
      { label: 'Charles Dickens', isCorrect: false },
      { label: 'William Shakespeare', isCorrect: true },
      { label: 'Mark Twain', isCorrect: false },
      { label: 'Leo Tolstoy', isCorrect: false },
    ],
  },
  {
    question: 'What is the smallest prime number?',
    options: [
      { label: '0', isCorrect: false },
      { label: '1', isCorrect: false },
      { label: '2', isCorrect: true },
      { label: '3', isCorrect: false },
    ],
  },
  {
    question: 'Which element has the chemical symbol "O"?',
    options: [
      { label: 'Osmium', isCorrect: false },
      { label: 'Oxygen', isCorrect: true },
      { label: 'Gold', isCorrect: false },
      { label: 'Hydrogen', isCorrect: false },
    ],
  },
  {
    question: 'What is the currency of Japan?',
    options: [
      { label: 'Yen', isCorrect: true },
      { label: 'Won', isCorrect: false },
      { label: 'Dollar', isCorrect: false },
      { label: 'Euro', isCorrect: false },
    ],
  },
  {
    question: 'Which gas is most abundant in the Earth’s atmosphere?',
    options: [
      { label: 'Oxygen', isCorrect: false },
      { label: 'Carbon Dioxide', isCorrect: false },
      { label: 'Nitrogen', isCorrect: true },
      { label: 'Hydrogen', isCorrect: false },
    ],
  },
  {
    question: 'Which continent is the Sahara Desert located in?',
    options: [
      { label: 'Asia', isCorrect: false },
      { label: 'Africa', isCorrect: true },
      { label: 'Australia', isCorrect: false },
      { label: 'South America', isCorrect: false },
    ],
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    options: [
      { label: 'Gold', isCorrect: false },
      { label: 'Diamond', isCorrect: true },
      { label: 'Iron', isCorrect: false },
      { label: 'Quartz', isCorrect: false },
    ],
  },
];



  


  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-8 font-sans">
      <Toaster />
      {confettiVisible && <Confetti width={width} height={height} />}

      <h2 className="text-3xl font-extrabold text-yellow-400 text-center mb-8">General Knowledge Quiz</h2>

      {showScore ? (
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Quiz Completed!</h1>
          <p className="text-2xl font-semibold mb-4">Your Score: {score} / {questions.length}</p>
          <button
            className="bg-yellow-400 text-gray-900 px-6 py-2 font-bold uppercase tracking-wide transition-transform transform hover:scale-105 focus:outline-none"
            onClick={handleRestart}
          >
            Start Again
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">Question {currentQuestion + 1} / {questions.length}</p>
          <h1 className="text-4xl font-bold mb-6">{questions[currentQuestion].question}</h1>
          <div className="grid grid-cols-2 gap-6 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`p-4  bg-teal-700 text-gray-100 uppercase font-semibold tracking-wide transition-transform transform hover:scale-105 hover:bg-teal-600 ${
                  selectedOption === index && !option.isCorrect ? ' text-yellow-400' : ''
                } ${
                  selectedOption !== null && option.isCorrect ? 'text-green-400' : ''
                }`}
                onClick={() => handleOptionClick(option.isCorrect, index)}
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
            <div>
              <button
                className="bg-yellow-400 text-gray-900 justify-center px-4 py-2 font-bold uppercase tracking-wide hover:bg-yellow-300 transition-transform mx-auto transform hover:scale-105 focus:outline-none"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            </div>
          </Transition>




          <Transition
            show={selectedOption !== null}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div>
            <button
            className="mt-8 bg-red-500 mx-auto justify-center text-gray-900 px-6 py-2 font-bold uppercase tracking-wide hover:bg-red-400 transition-transform transform hover:scale-105 focus:outline-none"
            onClick={handleRestart}
          >
            Restart Quiz
          </button>
            </div>
          </Transition>

         
        </div>
      )}
    </div>
  );
};

export default QuizApp;


//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-200 p-8 font-sans">
//       <Toaster />
//       {confettiVisible && <Confetti width={width} height={height} />}
//       <h2 className="text-3xl font-extrabold text-yellow-400 text-center mb-8">General Knowledge Quiz</h2>

//       {showScore ? (
//         <div className="text-center">
//           <h1 className="text-5xl font-bold mb-4 text-yellow-400">Quiz Completed!</h1>
//           <p className="text-2xl font-semibold mb-4">Your Score: {score} / {questions.length}</p>
//           <button
//             className="bg-yellow-400 text-gray-900 px-6 py-2 font-bold uppercase tracking-wide transition-transform transform hover:scale-105 focus:outline-none"
//             onClick={handleRestart}
//           >
//             Start Again
//           </button>
//         </div>
//       ) : (
//         <div className="text-center">
//           <p className="text-xl font-semibold mb-4">Question {currentQuestion + 1} / {questions.length}</p>
//           <h1 className="text-4xl font-bold mb-6">{questions[currentQuestion].question}</h1>
//           <div className="grid grid-cols-2 gap-6 mb-6">
//             {questions[currentQuestion].options.map((option, index) => (
//               <button
//                 key={index}
//                 className={`p-4 bg-teal-700 text-gray-100 uppercase font-semibold tracking-wide transition-transform transform hover:scale-105 hover:bg-teal-600 ${
//                   selectedOption === index && !option.isCorrect ? ' text-yellow-400' : ''
//                 } ${selectedOption !== null && option.isCorrect ? 'text-green-400' : ''}`}
//                 onClick={() => handleOptionClick(option.isCorrect, index)}
//                 disabled={selectedOption !== null}
//               >
//                 {option.label}
//               </button>
//             ))}
//           </div>
//           <Transition
//             show={selectedOption !== null}
//             enter="transition-opacity duration-500"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//           >
//             <div>
//               <button
//                 className="bg-yellow-400 text-gray-900 justify-center px-4 py-2 font-bold uppercase tracking-wide hover:bg-yellow-300 transition-transform mx-auto transform hover:scale-105 focus:outline-none"
//                 onClick={handleNextQuestion}
//               >
//                 Next Question
//               </button>
//             </div>
//           </Transition>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizApp;
