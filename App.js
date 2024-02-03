import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import mentalHealthImage from './girl-filling-survey.jpeg';
import QuestionPage from './QuestionPage';
import Header from './Header';
import Footer from './Footer';
import ResultPage from './ResultPage';
import questions from './questions'; // Import your questions data

function App() {
  const [introVisible, setIntroVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIntroVisible(true);
      setButtonVisible(true);
    }, 100);
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />

        <div className="content-wrap">
          <main className="main-content">
            <section className={`intro ${introVisible ? 'show' : ''}`}>
              <h2>Understanding Mental Health</h2>
              <p className="intro-paragraph">
                Mental health is an important aspect of overall well-being. It's essential to
                raise awareness and promote a positive understanding of mental illnesses.
                Learn more about mental health and take our survey to assess mental state.
                <img src={mentalHealthImage} alt="Mental Health" className={`mental-health-image ${introVisible ? 'show' : ''}`} />
              </p>
            </section>
            <section className={`action ${buttonVisible ? 'show' : ''}`}>
              {/* Use Link to navigate to the survey page */}
              <Link to="/survey" className={`take-test-button ${buttonVisible ? 'show' : ''}`}>Take the Test</Link>
            </section>
          </main>
        </div>

        <Footer />

        <Routes>
          <Route path="/survey" element={<QuestionPage setUserAnswers={setUserAnswers} />} />
          <Route path="/result" element={<ResultPage userAnswers={userAnswers} questions={questions} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
