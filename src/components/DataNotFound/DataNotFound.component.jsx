import "./DataNotFound.styles.scss";
import Message from "../../components/Message/Message.component";

function DataNotFound({ message }) {
  return (
    <div>
      <h2>Data Not Found</h2>
      <br />
      <Message>{message}</Message>
    </div>
  );
}

export default DataNotFound;
