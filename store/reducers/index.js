import { combineReducers } from "redux";
import { Users } from "./users";
import { Modal } from "./modal";

const rootReducer = combineReducers({
  Users,
  Modal,
});

export default rootReducer;
