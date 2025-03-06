import React, { useReducer, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./basics/Loader";
import Error from "./basics/Error";

import StartScreen from "./components/StartScreen";

const initialState = {
  questions: [],
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "error":
      return { ...state, questions: [], status: "error" };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status } = state;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);

  return (
    <>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "ready" && <StartScreen />}
        {status === "error" && <Error />}
      </Main>
    </>
  );
}

export default App;
