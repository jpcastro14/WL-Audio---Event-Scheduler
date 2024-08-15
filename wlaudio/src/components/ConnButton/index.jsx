import React from "react";
import { Button } from "react-bootstrap";
import { LinkButton } from "./styles";

function ConnButton({ text, to }) {
  return (
    <div className="d-grid gap-2">
      <Button variant="danger">
        <LinkButton to={to}>{text}</LinkButton>
      </Button>
    </div>
  );
}

export default ConnButton;
