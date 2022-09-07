import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ListForm from "../../components/ListForm/ListForm.componen";
import { createListAsync } from "../../store/list/list.action";
import { selectUserInfo } from "../../store/user/user.selector";
import { selectListReducer } from "../../store/list/list.selector";

const ListNew = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { siteId } = useSelector(selectUserInfo);
  const { createStatus } = useSelector(selectListReducer);
  const handleOnSubmit = (list) => {
    dispatch(createListAsync(siteId, list));
  };

  useEffect(() => {
    if (createStatus === "succeeded") {
      navigate("/list");
    }
  }, [createStatus]);

  return (
    <div>
      <ListForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default ListNew;
