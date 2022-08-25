import "./Message.styles.scss";
const Message = ({ variant, children }) => {
  return <span className={variant}>{children}</span>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
