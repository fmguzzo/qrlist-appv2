import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM, render, fireEvent, screen } from "@testing-library/react";

import ListForm from "./ListForm.componen";

describe("<ListForm />", () => {
  const btnUpdateText = "Update";
  const btnCreateText = "Create";

  describe("ListForm with list to update", () => {
    const listToUpdate = {
      name: "L1",
      desc: "Lista 1",
      active: false,
    };

    const props = {
      handleOnSubmit: jest.fn(),
      listToUpdate,
    };

    test("Render content", () => {
      render(<ListForm {...props} />);

      const buttonElement = screen.getByText(btnUpdateText);
      expect(buttonElement).toBeInTheDocument();
      const inputElement = screen.getByDisplayValue(listToUpdate.name);
      expect(inputElement).toBeInTheDocument();
    });

    test("Click the button calls event handler once", () => {
      render(<ListForm {...props} />);

      const buttonElement = screen.getByText(btnUpdateText);
      fireEvent.click(buttonElement);
      expect(props.handleOnSubmit).toBeCalled();
      expect(props.handleOnSubmit).toBeCalledWith(props.listToUpdate);
    });
  });

  describe("ListForm with new list", () => {
    const props = {
      handleOnSubmit: jest.fn(),
    };

    test("Render content", () => {
      render(<ListForm {...props} />);

      screen.getByText(btnCreateText);
    });

    // TODO: Input value in a form
    // test.only("Click the button calls event handler once", () => {
    //   render(<ListForm {...props} />);

    //   const inputName = screen.getByRole("textbox", { name: /name/i });
    //   console.log(prettyDOM(inputName));
    //   const buttonElement = screen.getByText(btnCreateText);
    //   fireEvent.click(buttonElement);
    //   //expect(props.handleOnSubmit).toBeCalled();
    // });
  });
});
