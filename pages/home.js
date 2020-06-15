import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserssIfNeeded,
  loadMoreUsers,
} from "../store/actions/UserActions";
import Picker from "../components/Picker";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import UserInfoBox from "../components/UserInfoBox";
import UserModal from "../components/UserModal";

const useUsersState = () => {
  const dispatch = useDispatch();
  dispatch(fetchUserssIfNeeded(10));
  return useSelector((state) => ({
    users: state.Users.users,
    modal: state.Modal,
    loading: state.Users.isLoading,
    update: (size) => {
      dispatch(loadMoreUsers(size));
    },
  }));
};

const Home = () => {
  const { users, modal, loading, update } = useUsersState();
  const size = users.length;
  const isEmpty = size === 0;
  return (
    <div>
      <Picker value={size} onChange={update} options={[10, 20, 30, 50]} />
      {isEmpty ? (
        <div>No users available</div>
      ) : (
        users.map((user, index) => {
          return <UserInfoBox user={user} index={index} key={index} />;
        })
      )}
      {modal.open ? <UserModal /> : <div />}
      {loading ? <Loader /> : ""}
      <Footer />
    </div>
  );
};

export default Home;
