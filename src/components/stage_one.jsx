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
    textInput.current.value = "";
  };

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
      </form>
    </>
  );
};

export default Stage1;
