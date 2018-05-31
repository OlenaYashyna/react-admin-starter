

export const getUsers = () => ({
  type: 'USERS_FETCH_START',
});

export const setUsers = users => ({
  type: 'USERS_FETCH_SUCCESS',
  payload: { users },
});

export const addModal = () => ({
  type: 'MODAL_OPEN',
  payload: { isOpen: true },
});

export const addUser = user => ({
  type: 'USER_ADD',
  payload: { user },
});

export const addUserSuccs = users => ({
  type: 'USER_ADD_SUCCESS',
  payload: { users },
});

