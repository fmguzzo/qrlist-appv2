import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";

import DataNotFound from "./DataNotFound.component";

test("Render content", () => {
  const props = {
    message: "Please retry...",
  };

  const component = render(<DataNotFound {...props} />);

  // Find elemnet by a text
  // If we don't use the element, we could not assign it
  // If can not find the element with de text throw an error
  // It indicate that the text can not found.
  component.getByText(props.message);
  expect(component.container).toHaveTextContent(props.message);

  // Select an element
  // const h2 = view.container.querySelector("h2");
  // console.log(prettyDOM(h2));
});

test("Render content", () => {
  const props = {
    message: "Please retry...",
  };

  render(<DataNotFound message={props.message} />);
  const spanElement = screen.getByText(props.message);
  expect(spanElement).toBeInTheDocument();
});
