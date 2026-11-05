const Notification = ({ message }) => {
  if (!message.message) return null;
  if (message.successful) {
    return <div className="successfull">{message.message}</div>;
  } else return <div className="unsuccessfull">{message.message}</div>;
};
export default Notification;
