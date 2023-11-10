import { useState, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";

const MyContext = createContext();

const MyProvider = (props) => {
  const [stage, setStage] = useState(1);
  const [players, setPlayers] = useState([]);
  const [result, setResult] = useState("");

  const addPlayerHandler = (name) => {
    setPlayers((prevState) => [...prevState, name]);
  };

  const removePlayerHandler = (idx) => {
    let newArray = [...players];
    newArray.splice(idx, 1);

    setPlayers(newArray);
  };

  const nextHandler = () => {
    if (players.length < 2) {
      toast.error("You need more than one player", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } else {
      setStage(2);
      setTimeout(() => {
        generateLooser();
      }, 2000);
    }
  };

  const generateLooser = () => {
    let result = players[Math.floor(Math.random() * players.length)];
    setResult(result);
  };

  const resetGameHandler = () => {
    setStage(1);
    setPlayers([]);
    setResult("");
  };

  return (
    <>
      <MyContext.Provider
        value={{
          stage: stage,
          players: players,
          result: result,
          addPlayer: addPlayerHandler,
          removePlayer: removePlayerHandler,
          next: nextHandler,
          resetGame: resetGameHandler,
          getNewLooser: generateLooser,
        }}
      >
        {props.children}
      </MyContext.Provider>
      <ToastContainer />
    </>
  );
};

export { MyContext, MyProvider };
