"use strict";

import React, { useReducer } from "react";
import {
  Button,
  Container,
  Row,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../styles/style.scss";

const ReducerPage = () => {
  const initialCount = 0;
  const init = initialCount => ({ count: initialCount });

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: Number.parseInt(state.count) + 1 };
      case "decrement":
        return {
          count:
            Number.parseInt(state.count) > 0
              ? Number.parseInt(state.count) - 1
              : Number.parseInt(state.count)
        };
      case "set-value":
        return {
          count:
            Number.parseInt(action.payload) > 0
              ? Number.parseInt(action.payload)
              : initialCount
        };
      case "reset":
        return init(action.payload);
      default:
        throw new Error("Invalid action.");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <Container>
      <Row>
        <Col>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <Button
                variant="outline-secondary"
                onClick={() => dispatch({ type: "decrement" })}
              >
                -
              </Button>
            </InputGroup.Prepend>
            <FormControl
              type="number"
              min={0}
              className="text-center"
              value={state.count}
              style={{ maxWidth: "50px" }}
              onChange={event =>
                dispatch({ type: "set-value", payload: event.target.value })
              }
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={() => dispatch({ type: "increment" })}
              >
                +
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col>
          <span>Count: {state.count}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            size="sm"
            onClick={() => dispatch({ type: "reset", payload: initialCount })}
          >
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ReducerPage;
