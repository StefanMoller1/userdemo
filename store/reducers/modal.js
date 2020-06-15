import { CLOSE_MODAL } from "../actions/ModalActions";
import { LOAD_USER_MODAL } from "../actions/UserActions";

const initState = {
  open: false,
  modal: "",
};

export const Modal = (state = initState, payload) => {
  switch (payload.type) {
    case CLOSE_MODAL:
      return {
        ...state,
        open: false,
        modal: "",
      };
    case LOAD_USER_MODAL:
      console.log(payload);
      return {
        ...state,
        open: true,
        modal: payload.modal,
        index: payload.index,
      };
    default:
      return state;
  }
};
