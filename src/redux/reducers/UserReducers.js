import { REGISTER_UP, SIGN_IN } from "../actions/UserActions";
    const initialState = {
        user: [],
    }
const UserReducers = (state = initialState , action) => {
switch(action.type){
    case REGISTER_UP : return {
        ...state,
        user: action.user
    }
    case SIGN_IN : return {
        ...state,
        user: action.user
    }
    default: return state
}
}

export default UserReducers;