import React from "react";

function QuestionList({ questions }) {
  const questionArray = questions.map(question => )
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;