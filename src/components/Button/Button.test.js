import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM, render, fireEvent, screen } from "@testing-library/react";

import Button from "./Button.component";

describe("<Button/>", () => {
  const buttonContent = "Login";
  const buttonType = "login";
  describe("Login button", () => {
    test("Render child", () => {
      render(<Button buttonType={buttonType}>{buttonContent}</Button>);
      const buttonElement = screen.getByText(buttonContent);
      //const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass(buttonType);
      // expect(buttonElement).toHaveStyle(
      //   "background-color: #4285f4"
      // );
    });
  });
});
