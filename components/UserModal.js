import { Modal, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { CloseUserModal } from "../store/actions/ModalActions";

const useModalState = () => {
  const dispatch = useDispatch();
  return useSelector((state) => ({
    open: state.Modal.open,
    user: state.Users.users[state.Modal.index],
    closeModal: () => {
      dispatch(CloseUserModal());
    },
  }));
};

const UserModal = () => {
  const { open, user, closeModal } = useModalState();
  return (
    <>
      <Modal show={open} onHide={closeModal} className="user_modal">
        <Modal.Header closeButton>
          <Modal.Title>
            {user.name.title} {user.name.first} {user.name.last}
          </Modal.Title>
        </Modal.Header>
        <div className="row col-md-12">
          <Card.Img
            className="col-md-5"
            variant="top"
            src={user.picture.large}
            style={{ width: "200px", margin: "20px", float: "left" }}
          />
          <div
            className="col-md-6"
            style={{ float: "right", margin: "20px 0" }}
          >
            <ul className="user_details">
              <li>First Name: {user.name.first}</li>
              <li>Last Name: {user.name.last}</li>
              <li>Email: {user.email}</li>
              <li>Date of Birth: {new Date(user.dob.date).toDateString()}</li>
              <li>Age: {user.dob.age}</li>
              <li>
                Street: {user.location.street.number}{" "}
                {user.location.street.name}
              </li>
              <li>City: {user.location.city}</li>
              <li>State: {user.location.state}</li>
              <li>City: {user.location.city}</li>
              <li>Country: {user.location.country}</li>
            </ul>
          </div>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

UserModal.propTypes = {
  userIndex: PropTypes.number,
};

export default UserModal;
