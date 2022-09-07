import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserInfo } from "../../store/user/user.selector";
import { selectListReducer } from "../../store/list/list.selector";
import { getListsAsync, listFetchReset } from "../../store/list/list.action";
import Button from "../../components/Button/Button.component";
import CardList from "../../components/CardList/CardList.component";
import Spinner from "../../components/Spinner/Spinner.component";

import "./ListPreview.styles.scss";

const ListPreview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { siteId } = useSelector(selectUserInfo);
  const { lists, fetchStatus, deleteStatus, createStatus, updateStatus } =
    useSelector(selectListReducer);

  useEffect(() => {
    dispatch(listFetchReset());
  }, [deleteStatus, createStatus, updateStatus]);

  useEffect(() => {
    console.log(fetchStatus);
    if (fetchStatus === "idle") {
      dispatch(getListsAsync(siteId));
    }
  }, [fetchStatus]);

  const createListHandle = () => {
    navigate("new");
  };

  return fetchStatus === "loading" ? (
    <Spinner />
  ) : (
    <div className="lists-container">
      <div className="lists-header">
        <h1>List Detail</h1>
        <Button onClick={createListHandle}>Create</Button>
      </div>
      <div className="lists-detail">
        {lists.map((list) => (
          <CardList key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default ListPreview;
