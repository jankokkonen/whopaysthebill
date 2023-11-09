import { useContext, useRef } from "react";
import { MyContext } from "../context";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    context.addPlayer(value);
    textInput.current.value = "";
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
                      onClick={() => alert("delete")}
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
