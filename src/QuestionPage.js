import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from './questions';
import './App.css';

function QuestionPage({ setUserAnswers }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswersLocal, setUserAnswersLocal] = useState(Array(questions.length).fill(null));
  const navigate = useNavigate();

  // Create a ref for the question page element
  const questionPageRef = useRef(null);

  const handleOptionSelect = (questionIndex, selectedOptionIndex) => {
    const updatedAnswers = [...userAnswersLocal];
    updatedAnswers[questionIndex] = selectedOptionIndex;
    setUserAnswersLocal(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setUserAnswers(userAnswersLocal);
      navigate('/result');
    }
  };

  useEffect(() => {
    // Scroll to the question page element when it's rendered
    if (questionPageRef.current) {
      questionPageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="question-p" ref={questionPageRef}>
      <div className="question-page">
        <h2>Take the Mental Health Survey</h2>
        {currentQuestion < questions.length ? (
          <div className="question-container">
            <h3>{questions[currentQuestion].questionText}</h3>
            <ul className="options-list">
              {questions[currentQuestion].options.map((option, optionIndex) => (
                <li key={optionIndex} className="option">
                  <label>
                    <input
                      type="radio"
                      checked={userAnswersLocal[currentQuestion] === optionIndex}
                      onChange={() => handleOptionSelect(currentQuestion, optionIndex)}
                    />
                    {option.optionText}
                  </label>
                </li>
              ))}
            </ul>
            <button onClick={handleNextQuestion} className="next-button">
              {currentQuestion === questions.length - 1 ? 'Submit' : 'Next Question'}
            </button>
          </div>
        ) : (
          <p>Congratulations! You've completed the survey.</p>
        )}
      </div>
    </div>
  );
}

export default QuestionPage;
