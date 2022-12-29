import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(questions => setQuestions(questions))
    .catch(e => console.log(e));
  }, []);

  function onAddQuestion(question) {
    const newQuestions = [...questions, question];
    setQuestions(newQuestions);
  }

  function onDeleteQuestion(id) {
    const newQuestions = questions.filter(question => question.id !== id);
    setQuestions(newQuestions);
  }

  function onChangeAnswer(question) {
    const newQuestions = questions.map()
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={ onAddQuestion }/> : <QuestionList questions={ questions } onDeleteQuestion={ onDeleteQuestion } onChangeAnswer={ onChangeAnswer }/>}
    </main>
  );
}

export default App;