import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadNextPage, RefreshUsers } from "../store/actions/UserActions";
import { Card, Button } from "react-bootstrap";

const useState = () => {
  const dispatch = useDispatch();
  return useSelector((state) => ({
    LoadMore: (e) => {
      dispatch(loadNextPage());
    },
    Refresh: (e) => {
      dispatch(RefreshUsers());
    },
  }));
};

const Footer = () => {
  const { LoadMore, Refresh } = useState();
  return (
    <div className="footer">
      <Button
        onClick={Refresh}
        style={{ float: "right", margin: "0 20px" }}
        variant="primary"
      >
        Refresh
      </Button>
      <Button
        onClick={LoadMore}
        style={{ float: "right", margin: "0 20px" }}
        variant="primary"
      >
        Load More
      </Button>
    </div>
  );
};

export default Footer;
