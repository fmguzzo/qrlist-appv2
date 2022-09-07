import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListForm from "../../components/ListForm/ListForm.componen";
import { updateListAsync } from "../../store/list/list.action";
import { useDispatch, useSelector } from "react-redux";

import { selectListReducer } from "../../store/list/list.selector";

const ListUpdate = () => {
  const { listId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { lists, updateStatus } = useSelector(selectListReducer);
  const listToUpdate = lists.find((list) => list._id === listId);

  useEffect(() => {
    if (updateStatus === "succeeded") {
      navigate("/list");
    }
  }, [updateStatus]);

  const handleOnSubmit = (list) => {
    dispatch(updateListAsync(listId, list));
  };
  return (
    <div>
      <ListForm handleOnSubmit={handleOnSubmit} listToUpdate={listToUpdate} />
    </div>
  );
};

export default ListUpdate;
