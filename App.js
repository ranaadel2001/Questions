import React, { useState } from "react";
import QuestionForm from "./components/QuestionForm";

const App = () => {
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (question, choices, correctAnswerIndex) => {
    const newQuestion = {
      question: question,
      choices: choices,
      correctAnswerIndex: correctAnswerIndex,
    };
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div>
      <h1>Question Form</h1>
      <QuestionForm onSubmit={handleAddQuestion} />
      <h2>Questions</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <ul>
            {question.choices.map((choice, index) => (
              <li key={index}>{choice}</li>
            ))}
          </ul>
          <p>Correct answer index: {question.correctAnswerIndex}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
