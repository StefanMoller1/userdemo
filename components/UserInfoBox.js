import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { LoadUser } from "../store/actions/UserActions";
import { Card, Button } from "react-bootstrap";

const useState = () => {
  const dispatch = useDispatch();
  return useSelector((state) => ({
    viewProfile: (e) => {
      dispatch(LoadUser(e.target.id));
    },
  }));
};

const UserInfoBox = ({ user, index }) => {
  const { viewProfile } = useState();
  return (
    <Card
      style={{
        width: "16rem",
        float: "left",
        padding: "10px",
        margin: "10px",
        height: "500px",
      }}
    >
      <Card.Img variant="top" src={user.picture.large} />
      <Card.Body>
        <Card.Title>
          {user.name.title} {user.name.first} {user.name.last} ({user.dob.age})
        </Card.Title>
        <Card.Text>
          {user.location.state}
          <br />
          {user.location.country}
          <br />
          {user.location.postcode}
          <br />
        </Card.Text>
        <Button
          onClick={viewProfile}
          style={{ float: "right" }}
          variant="primary"
          id={index}
        >
          View Profile
        </Button>
      </Card.Body>
    </Card>
  );
};

UserInfoBox.propTypes = {
  user: PropTypes.object,
};

export default UserInfoBox;
