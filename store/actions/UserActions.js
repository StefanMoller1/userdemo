import axios from "axios";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USERS = "UPDATE_USERS";
export const LOADING_USERS = "LOADING_USERS";
export const LOAD_USER_MODAL = "LOAD_USER_MODAL";

const URL = "https://randomuser.me/api";

const receiveUsers = (data) => ({
  type: RECEIVE_USERS,
  users: data.results,
  seed: data.info.seed,
  page: data.info.page,
  results: data.info.results,
});

const receiveMoreUsers = (data) => ({
  type: UPDATE_USERS,
  users: data.results,
  seed: data.info.seed,
  page: data.info.page,
  results: data.info.results,
});

const loadingUsers = () => ({
  type: LOADING_USERS,
});

const LoadUserModal = (index) => ({
  type: LOAD_USER_MODAL,
  modal: "UserModal",
  index,
});

const fetchUsers = (size = 10, seed) => (dispatch) => {
  const urlSeed = seed ? `&seed=${seed}` : "";
  axios
    .get(`${URL}?results=${size}${urlSeed}`)
    .then((response) => response.data)
    .then((data) => {
      dispatch(receiveUsers(data));
    });
};

const fetchMoreUsers = (size = 10, page, seed) => (dispatch) => {
  axios
    .get(`${URL}?results=${size}&page=${page}&seed=${seed}`)
    .then((response) => response.data)
    .then((data) => {
      dispatch(receiveMoreUsers(data));
    });
};

export const fetchUserssIfNeeded = (size) => (dispatch, getState) => {
  if (getState().Users.users.length === 0 && !getState().Users.isLoading) {
    dispatch(loadingUsers());
    return dispatch(fetchUsers(size, getState().Users.seed));
  }
};

export const loadMoreUsers = (size) => (dispatch, getState) => {
  if (getState().Users.users.length !== size && !getState().Users.isLoading) {
    dispatch(loadingUsers());
    return dispatch(fetchUsers(size, getState().Users.seed));
  }
};

export const LoadUser = (index) => (dispatch) => {
  return dispatch(LoadUserModal(index));
};

export const loadNextPage = () => (dispatch, getState) => {
  dispatch(loadingUsers());
  return dispatch(
    fetchMoreUsers(
      getState().Users.results,
      getState().Users.page + 1,
      getState().Users.seed
    )
  );
};

export const RefreshUsers = () => (dispatch, getState) => {
  dispatch(loadingUsers());
  return dispatch(fetchUsers(getState().Users.results, 0));
};
