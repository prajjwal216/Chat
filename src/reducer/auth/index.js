const initialState = {};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.SET_LOGIN:
      return {...state, loginData: action.payload};

    default:
      return state;
  }
}
export default authReducer;
