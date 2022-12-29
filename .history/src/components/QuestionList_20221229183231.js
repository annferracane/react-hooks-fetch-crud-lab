import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions }) {
  const questionArray = questions.map(question => <QuestionItem key={ question.id }question={ question } onDeleteQuestion/>);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{ questionArray }</ul>
    </section>
  );
}

export default QuestionList;