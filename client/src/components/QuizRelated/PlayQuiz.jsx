import React, { useState, useEffect } from "react";
import "./quiz.css";

const PlayQuiz = () => {
  const questions = [
    {
      questionText: "What does the term sustainability refer to?",
      answerOptions: [
        { answerText: "The ability to meet short-term needs", isCorrect: false },
        { answerText: "Balancing economic growth with social equality", isCorrect: false },
        { answerText: "Meeting the needs of the present without compromising future generations", isCorrect: true },
        { answerText: "Maximizing resource consumption", isCorrect: false },
      ],
    },
    {
      questionText: "What are the three pillars of sustainability often referred to as?",
      answerOptions: [
        { answerText: "Singular Focus", isCorrect: false },
        { answerText: "Triple Bottom Line", isCorrect: true },
        { answerText: "Sustainability Trio", isCorrect: false },
        { answerText: "Environmental Trifecta", isCorrect: false },
      ],
    },
    {
      questionText: "What does the reduce, reuse, recycle mantra promote?",
      answerOptions: [
        { answerText: "Increasing waste production", isCorrect: false },
        { answerText: "Conserving resources", isCorrect: true },
        { answerText: "Ignoring environmental concerns", isCorrect: false },
        { answerText: "Wasting energy", isCorrect: false },
      ],
    },
    {
      questionText: "What is measured by the term carbon footprint?",
      answerOptions: [
        { answerText: "Total greenhouse gas emissions associated with an entity", isCorrect: true },
        { answerText: "The number of trees in a specific area", isCorrect: false },
        { answerText: "The amount of water used in production", isCorrect: false },
        { answerText: "The weight of carbon in the atmosphere", isCorrect: false },
      ],
    },
    {
      questionText: "What does sustainable agriculture aim to achieve?",
      answerOptions: [
        { answerText: "Maximize resource use", isCorrect: false },
        { answerText: "Deplete soil health", isCorrect: false },
        { answerText: "Ensure long-term viability of food production", isCorrect: true },
        { answerText: "Promote monoculture", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10); // Initial timer value in seconds
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Function to handle timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // Clear interval on component unmount or when all questions are answered
    return () => clearInterval(interval);
  }, []);

  // Function to handle answer option click
  const handleAnswerOptionClick = (isCorrect, answerText) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedAnswer(answerText);

    // Automatically move to the next question after 1 second
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setTimer(10); // Reset timer to initial value for the next question
        setSelectedAnswer(null); // Reset selected answer
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  return (
    <div className="top">
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
              <div className="timer-section">
                Time Remaining: {timer} seconds
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerOptionClick(
                        answerOption.isCorrect,
                        answerOption.answerText
                      )
                    }
                    className={`submit-btn ${
                      selectedAnswer === answerOption.answerText
                        ? answerOption.isCorrect
                          ? "correct"
                          : "incorrect"
                        : ""
                    }`}
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
            {selectedAnswer && (
              <div className="correct-answer-section">
                Correct Answer:{" "}
                {questions[currentQuestion].answerOptions.find(
                  (option) => option.isCorrect
                ).answerText}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PlayQuiz;
