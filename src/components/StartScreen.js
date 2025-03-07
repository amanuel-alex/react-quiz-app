function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2 className="tags">welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to test Your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        {" "}
        let's start
      </button>
    </div>
  );
}

export default StartScreen;
