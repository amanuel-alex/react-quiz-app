function Questions({ questions }) {
  console.log(questions);
  return (
    <>
      <h4>{questions.question}</h4>
      <div className="options">
        {questions.options.map((option) => (
          <button key={option} className="btn btn-option">
            {option}
          </button>
        ))}
      </div>
    </>
  );
}

export default Questions;
