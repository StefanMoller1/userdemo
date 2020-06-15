export const CLOSE_MODAL = "TOGGLE_MODAL";

const toggleModal = () => ({
  type: CLOSE_MODAL,
  open: false,
});

export const CloseUserModal = () => (dispatch) => {
  return dispatch(toggleModal(false));
};
