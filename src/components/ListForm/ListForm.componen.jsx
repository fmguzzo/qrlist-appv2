import { useState } from "react";
import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

const ListForm = (props) => {
  const [list, setList] = useState(() => {
    return {
      name: props.listToUpdate ? props.listToUpdate.name : "",
      desc: props.listToUpdate ? props.listToUpdate.desc : "",
      active: props.listToUpdate ? props.listToUpdate.active : false,
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { name, desc, active } = list;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, desc];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const list = {
        name,
        desc,
        active,
      };
      console.log(list);
      props.handleOnSubmit(list);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    switch (name) {
      case "namexxx":
        if (value === "" || parseInt(value) === +value) {
          setList((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setList((prevState) => ({
          ...prevState,
          [name]: type === "checkbox" ? checked : value,
        }));
    }
  };

  return (
    <div className="main-form ">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <form onSubmit={handleOnSubmit}>
        <FormInput
          label="Name"
          type="text"
          maxLength="25"
          required
          onChange={handleInputChange}
          name="name"
          value={name}
        />

        <FormInput
          label="Description"
          type="text"
          maxLength="50"
          onChange={handleInputChange}
          name="desc"
          value={desc}
        />

        <FormInput
          label="Active"
          type="checkbox"
          onChange={handleInputChange}
          name="active"
          value={active}
        />

        <Button type="submit">
          {props.listToUpdate ? "Update" : "Create"}
        </Button>
      </form>
    </div>
  );
};

export default ListForm;
