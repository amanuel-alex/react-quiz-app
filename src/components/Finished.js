function FinishedScreen({ points, maxPossiblePoints, highscore }) {
  const perecentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (perecentage === 100) emoji = "🥇";
  if (perecentage >= 80 && perecentage < 100) emoji = "🥈";
  if (perecentage >= 70 && perecentage < 80) emoji = "🥉";
  if (perecentage >= 60 && perecentage < 70) emoji = "☺";
  if (perecentage < 60) emoji = "😞";
  return (
    <div>
      <p className="result">
        <span>{emoji}</span>
        you scored <strong>{points}</strong> out of {maxPossiblePoints}(
        {Math.ceil(perecentage)}%)
      </p>
      <p className="highscore">(Highscore:{highscore} points )</p>
      eturn (
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart
      </button>
    </div>
  );
}

export default FinishedScreen;
