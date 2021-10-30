import {
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  EDIT_USER,
  EDIT_USER_FAIL,
  EDIT_USER_SUCCESS,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
} from "../const";

const intialState = {
  users: [],
  isLoading: null,
  error: null,
};

const userReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case EDIT_USER:
    case DELETE_USER:
    case ADD_USER:
    case GET_USERS:
      return { ...state, isLoading: true };

    case GET_USERS_SUCCESS:
      return { ...state, isLoading: false, users: payload };

    case ADD_USER_SUCCESS:
      return { ...state, isLoading: false, users: [...state.users, payload] };

    case EDIT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users.map((user) =>
          user._id === payload._id ? { ...user, ...payload } : user
        ),
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users.filter((user) => user._id !== payload._id),
      };

    case EDIT_USER_FAIL:
    case DELETE_USER_FAIL:
    case ADD_USER_FAIL:
    case GET_USERS_FAIL:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};

export default userReducer;
