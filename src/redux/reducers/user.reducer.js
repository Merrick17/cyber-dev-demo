const { GET_USERS_LIST, GET_SINGLE_USER } = require("../actions/action.types");

const initUserList = {
    usersList: [], 
    selectedUser:{}
}

const usersReducer = (state = initUserList, action) => {
    let { type, payload } = action;
    switch (type) {
        case GET_USERS_LIST:
            return { ...state, usersList: payload }
        case GET_SINGLE_USER:
            return {...state,selectedUser:payload}

        default:
            return state;
    }
}

export default usersReducer;