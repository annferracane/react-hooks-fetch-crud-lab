import React from "react";

function QuestionItem({ question, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function onDeleteHandler() {
    fetch(`http://localhost:4000/questions/${id}`, { method: "DELETE" })
    .then(resp => resp.json())
    .then({
      console.log("deleted")
    });
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={ onDeleteHandler }>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
