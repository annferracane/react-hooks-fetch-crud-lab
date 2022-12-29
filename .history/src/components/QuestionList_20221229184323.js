import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onChangeAnswer }) {
  const questionArray = questions.map(question => <QuestionItem key={ question.id }question={ question } onDeleteQuestion={ onDeleteQuestion } onChangeAnswer={ onChangeAnswer }/>);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{ questionArray }</ul>
    </section>
  );
}

export default QuestionList;