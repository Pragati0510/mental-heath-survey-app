
import React, { useEffect, useRef } from 'react';
import './App.css';

function ResultPage({ userAnswers, questions }) {
  const resultRef = useRef();

  useEffect(() => {
    resultRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const calculateScore = () => {
    let totalScore = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] !== null) {
        const selectedOption = questions[i].options[userAnswers[i]];
        const optionPoints = selectedOption.points;
        totalScore += optionPoints;
      }
    }
    return totalScore;
  };

  const score = calculateScore();

  const scoreRanges = [
    { minScore: 0, maxScore: 20, category: 'Low Distress', info: 'This range could indicate that you are likely experiencing minimal emotional challenges and overall well-being.' },
    { minScore: 21, maxScore: 40, category: 'Mild Distress', info: 'Falling within this range might mean you are facing some mild stress or occasional emotional difficulties.' },
    { minScore: 41, maxScore: 60, category: 'Moderate Distress', info: 'Being in this range might suggest that you are experiencing moderate levels of stress, anxiety, or other emotional challenges.' },
    { minScore: 61, maxScore: 80, category: 'Moderate to High Distress', info: 'This range could indicate that you are dealing with significant emotional difficulties or stressors that may be impacting your well-being.' },
    { minScore: 81, maxScore: 100, category: 'High Distress', info: 'Being in this range might indicate that you are experiencing high levels of stress, anxiety, or emotional challenges that could be affecting your daily functioning.' },
    { minScore: 101, maxScore: 120, category: 'Very High Distress', info: 'This range could suggest that you are experiencing severe emotional distress that likely requires professional attention and support.' },
  ];// Define your score ranges here


  const resultRange = scoreRanges.find(
    (range) => score >= range.minScore && score <= range.maxScore
  );

  return (
    <div className="result-p">
      <div ref={resultRef} className="result-page">
        <h2>Your Mental Health Survey Result</h2>
        <p>Your score: {score}</p>
        {resultRange && (
          <div>
            <p>Score Range: {resultRange.minScore} - {resultRange.maxScore}</p>
            <p>Category: {resultRange.category}</p>
            <p>What it indicates: {resultRange.info}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultPage;






/*
import React from 'react';
import './App.css';

function ResultPage({ userAnswers, questions }) {
  const calculateScore = () => {
    let totalScore = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] !== null) {
        const selectedOption = questions[i].options[userAnswers[i]];
        const optionPoints = selectedOption.points;
        totalScore += optionPoints;
      }
    }
    return totalScore;
  };


  const score = calculateScore();

  // Define the score ranges and corresponding information
  const scoreRanges = [
    { minScore: 0, maxScore: 20, category: 'Low Distress', info: 'This range could indicate that you are likely experiencing minimal emotional challenges and overall well-being.' },
    { minScore: 21, maxScore: 40, category: 'Mild Distress', info: 'Falling within this range might mean you are facing some mild stress or occasional emotional difficulties.' },
    { minScore: 41, maxScore: 60, category: 'Moderate Distress', info: 'Being in this range might suggest that you are experiencing moderate levels of stress, anxiety, or other emotional challenges.' },
    { minScore: 61, maxScore: 80, category: 'Moderate to High Distress', info: 'This range could indicate that you are dealing with significant emotional difficulties or stressors that may be impacting your well-being.' },
    { minScore: 81, maxScore: 100, category: 'High Distress', info: 'Being in this range might indicate that you are experiencing high levels of stress, anxiety, or emotional challenges that could be affecting your daily functioning.' },
    { minScore: 101, maxScore: 120, category: 'Very High Distress', info: 'This range could suggest that you are experiencing severe emotional distress that likely requires professional attention and support.' },
  ];

  // Find the corresponding range for the score
  const resultRange = scoreRanges.find(range => score >= range.minScore && score <= range.maxScore);

  return (
    <div className="result-p">
      <div className="result-page">
        <h2>Your Mental Health Survey Result</h2>
        <p>Your score: {score}</p>
        {resultRange && (
          <div>
            <p>Score Range: {resultRange.minScore} - {resultRange.maxScore}</p>
            <p>Category: {resultRange.category}</p>
            <p>What it indicates: {resultRange.info}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultPage;
*/
