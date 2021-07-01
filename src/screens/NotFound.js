import React from "react";
import { Button } from "../components/Button";

export const NotFound = ({ history }) => {
  return (
    <div className="not-found-container">
      <Button onClick={() => history.goBack()}>Back</Button>
      <strong>404 PAGE NOT FOUND</strong>
    </div>
  );
};
