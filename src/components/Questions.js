import Options from "./Options";

function Questions({ questions, dispatch, answer }) {
  console.log(questions);
  return (
    <>
      <h4>{questions.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </>
  );
}

export default Questions;
