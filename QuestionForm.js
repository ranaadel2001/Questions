import React, { useState } from "react";

const QuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState(["", ""]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleChoiceChange = (e, index) => {
    const newChoices = [...choices];
    newChoices[index] = e.target.value;
    setChoices(newChoices);
  };

  const handleAddChoice = () => {
    setChoices([...choices, ""]);
  };

  const handleRemoveChoice = (index) => {
    const newChoices = [...choices];
    newChoices.splice(index, 1);
    setChoices(newChoices);
  };

  const handleSelectCorrectAnswer = (index) => {
    setCorrectAnswerIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Question submitted:", question);
    console.log("Choices submitted:", choices);
    console.log("Correct answer index:", correctAnswerIndex);
    onSubmit(question, choices, correctAnswerIndex);
    setQuestion("");
    setChoices(["", ""]);
    setCorrectAnswerIndex(-1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question:
        <input type="text" value={question} onChange={handleQuestionChange} />
      </label>
      {choices.map((choice, index) => (
        <div key={index}>
          <label>
            Choice {index + 1}:
            <input
              type="text"
              value={choice}
              onChange={(e) => handleChoiceChange(e, index)}
            />
          </label>
          <input
            type="radio"
            name="correct-answer"
            checked={index === correctAnswerIndex}
            onChange={() => handleSelectCorrectAnswer(index)}
          />
          <button type="button" onClick={() => handleRemoveChoice(index)}>
            Remove Choice
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddChoice}>
        Add Choice
      </button>
      <button type="submit">Add Question</button>
    </form>
  );
};

export default QuestionForm;
