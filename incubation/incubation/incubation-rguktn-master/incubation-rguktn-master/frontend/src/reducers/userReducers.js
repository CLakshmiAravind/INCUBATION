import {
  USER_LOGOUT,
  USER_REGISTRATION_FAIL,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_REQUEST,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  //ADMIN_SIGNIN_SUCCESS,
  //ADMIN_SIGNIN_REQUEST,
} from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        admin: action.payload.isAdmin,
        username: action.payload.username,
      };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTRATION_REQUEST:
      return { loading: true };
    case USER_REGISTRATION_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTRATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
