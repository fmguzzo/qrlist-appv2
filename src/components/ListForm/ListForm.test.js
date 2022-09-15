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

    test("Render input & button contect", () => {
      render(<ListForm {...props} />);

      const buttonElement = screen.getByText(btnUpdateText);
      const inputNameEl = screen.getByDisplayValue(listToUpdate.name);
      const inputDescEl = screen.getByDisplayValue(listToUpdate.desc);
      expect(buttonElement).toBeInTheDocument();
      expect(inputNameEl).toBeInTheDocument();
      expect(inputDescEl).toBeInTheDocument();
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
    const listToCreate = {
      name: "New",
      desc: "New desc",
      active: false,
    };

    test("Render initial content", () => {
      render(<ListForm {...props} />);

      const buttonElement = screen.getByText(btnCreateText);
      const inputNameEl = screen.getByRole("textbox", { name: "name" });
      const inputDescEl = screen.getByRole("textbox", { name: "desc" });
      expect(buttonElement).toBeInTheDocument();
      expect(inputNameEl).toBeInTheDocument();
      expect(inputDescEl).toBeInTheDocument();
      expect(inputNameEl).toHaveValue("");
      expect(inputDescEl).toHaveValue("");
    });

    test("Form input should change", () => {
      render(<ListForm {...props} />);

      const inputNameEl = screen.getByRole("textbox", { name: "name" });
      const inputDescEl = screen.getByRole("textbox", { name: "desc" });
      fireEvent.change(inputNameEl, { target: { value: listToCreate.name } });
      fireEvent.change(inputDescEl, { target: { value: listToCreate.desc } });

      expect(inputNameEl).toHaveValue(listToCreate.name);
      expect(inputDescEl).toHaveValue(listToCreate.desc);
    });

    test("Click the button calls event handler once", () => {
      render(<ListForm {...props} />);

      const buttonElement = screen.getByText(btnCreateText);
      const inputNameEl = screen.getByRole("textbox", { name: "name" });
      const inputDescEl = screen.getByRole("textbox", { name: "desc" });
      fireEvent.change(inputNameEl, { target: { value: listToCreate.name } });
      fireEvent.change(inputDescEl, { target: { value: listToCreate.desc } });

      fireEvent.click(buttonElement);
      expect(props.handleOnSubmit).toBeCalledWith(listToCreate);
    });
  });
});
