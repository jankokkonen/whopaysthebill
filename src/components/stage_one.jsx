import { useContext, useRef, useState } from "react";
import { MyContext } from "../context";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    const validate = validateInput(capitalizedValue);

    if (validate) {
      setError([false, ""]);
      context.addPlayer(capitalizedValue);
      textInput.current.value = "";
    }
  };

  const validateInput = (value) => {
    if (value === "") {
      setError([true, "Sorry, you need to add something"]);
      return false;
    }
    if (value.length <= 2) {
      setError([true, "Sorry, you need add 3 char at least"]);
      return false;
    }
    return true;
  };

  console.log(context);

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player name"
            name="player"
            ref={textInput}
          />
        </Form.Group>

        {error[0] ? <Alert className="text-center">{error[1]}</Alert> : null}

        <Button className="miami" variant="primary" type="submit">
          Add player
        </Button>
        {context.players && context.players.length > 0 ? (
          <>
            <hr />
            <div>
              <ul className="list-group">
                {context.players.map((player, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                  >
                    {player}
                    <span
                      className="badge badge-danger"
                      onClick={() => context.removePlayer(idx)}
                    >
                      X
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
      </form>
    </>
  );
};

export default Stage1;
