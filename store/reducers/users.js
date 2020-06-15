import {
  UPDATE_USERS,
  LOADING_USERS,
  RECEIVE_USERS,
} from "../actions/UserActions";

const initState = {
  lastUpdated: new Date().getTime(),
  users: [],
  isLoading: false,
};
export const Users = (state = initState, payload) => {
  switch (payload.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users: payload.users,
        seed: payload.seed,
        page: payload.page,
        results: payload.results,
        isLoading: false,
      };
    case UPDATE_USERS:
      return {
        ...state,
        users: state.users.concat(payload.users),
        // users: payload.users,
        seed: payload.seed,
        page: payload.page,
        results: payload.results,
        isLoading: false,
      };
    case LOADING_USERS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
