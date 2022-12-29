import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions }) {
  const questionArray = questions.map(question => <QuestionItem question={ question }/>);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{ questionArray }</ul>
    </section>
  );
}

export default QuestionList;