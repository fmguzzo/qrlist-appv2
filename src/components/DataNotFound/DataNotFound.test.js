import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";

import DataNotFound from "./DataNotFound.component";

test("Render content", () => {
  const props = {
    message: "Please retry...",
  };

  render(<DataNotFound {...props} />);
  const spanElement = screen.getByText(props.message);
  expect(spanElement).toBeInTheDocument();
});
