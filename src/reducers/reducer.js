const initialState = {
  users: [],
  pending: false,
  user: {},
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'USERS_FETCH_START':
      return {...state, pending: true};
    case 'USERS_FETCH_SUCCESS':
      console.log('jhkhkj')
      return {
        ...state,
        users: payload.users,
        pending: false,
      }
    case 'MODAL_OPEN':
      return {
        ...state,
        isOpen: payload.isOpen,
      }
    case 'USER_ADD':
      return {
        ...state,
        user: payload.user,
      }
    default:
      return state;
  }
}
