import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.component";
import { deleteListAsync, listFetchReset } from "../../store/list/list.action";

import "./CardList.styles.scss";

function Card({ list }) {
  const { _id, name, desc } = list;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateListHandle = () => {
    navigate(`update/${_id}`);
  };

  const deleteListHandle = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteListAsync(_id));
    }
  };

  const nextHandle = () => {
    navigate(`:${_id}/categories`);
  };

  return (
    <div className="card-container">
      <div className="card-header">{name}</div>
      <div className="card-body">{desc}</div>
      <div className="card-footer">
        <div className="card-footer-action">
          <Button onClick={updateListHandle} buttonType="inverted">
            Update
          </Button>
          <Button onClick={deleteListHandle} buttonType="inverted">
            Delete
          </Button>
        </div>
        <div className="card-footer-next">
          <Button onClick={nextHandle}>Categories</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
