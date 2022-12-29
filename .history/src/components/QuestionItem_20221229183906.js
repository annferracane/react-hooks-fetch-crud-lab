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
    .then(onDeleteQuestion(id))
    .catch(e => console.log(e));
  }

  function onChangeHandler() {

    const 
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: {
        
      }
    }

    fetch(`http://localhost:4000/questions/${id}`, { method: "PATCH" })
    .then()
    .then()
    .catch(e => console.log(e));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={ onChangeHandler } defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={ onDeleteHandler }>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
