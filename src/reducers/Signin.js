import { ADD_TO_TEXT } from "../actions/index";
import { initialState } from "./initialState";

const SigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_TEXT:
      let test1 = Object.assign({}, state, {
        email: action.payload.items.taget.value,
      });
      console.log(state.email);
      return test1;

    default:
      return state;
  }
};

export default SigninReducer;
