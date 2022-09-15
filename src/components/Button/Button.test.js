import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM, render, fireEvent, screen } from "@testing-library/react";

import Button from "./Button.component";

describe("<Button/>", () => {
  describe("Login button", () => {
    const buttonContent = "Login";
    const buttonType = "login";

    test("Render child", () => {
      render(<Button buttonType={buttonType}>{buttonContent}</Button>);
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement.textContent).toBe(buttonContent);
      expect(buttonElement).toHaveClass(buttonType);
      // expect(buttonElement).toHaveStyle(
      //   "background-color: #4285f4"
      // );
    });
  });

  describe("Default button", () => {
    const buttonContent = "Text Button";

    test("Render child", () => {
      render(<Button>{buttonContent}</Button>);
      const buttonElement = screen.getByText(buttonContent);
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).not.toHaveClass("login");
      expect(buttonElement).not.toHaveClass("inverted");
    });
  });
});
