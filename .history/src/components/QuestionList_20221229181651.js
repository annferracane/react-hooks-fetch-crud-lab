import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions }) {
  const questionArray = questions.map(question => <QuestionItem)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
