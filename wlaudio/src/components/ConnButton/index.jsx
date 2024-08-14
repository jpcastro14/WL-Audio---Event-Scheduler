import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ConnButton({ text, to }) {
  return (
    <div className="d-grid gap-2">
      <Button variant="danger">
        <Link to={to}>{text}</Link>
      </Button>
    </div>
  );
}

export default ConnButton;
