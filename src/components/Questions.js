import Options from "./Options";

function Questions({ questions }) {
  console.log(questions);
  return (
    <>
      <h4>{questions.question}</h4>
      <Options questions={questions} />
    </>
  );
}

export default Questions;
