import { NAVIGATE_MAIN_PAGE, NAVIGATE_USER_PAGE } from "../actions/action.types";

const initRoute = "login"


const routeReducer = (state = initRoute, action) => {

    let { type, payload } = action;
    switch (type) {
        case NAVIGATE_MAIN_PAGE:

            return "Home"; 
        case NAVIGATE_USER_PAGE:
            return "User" ; 

        default:
            return state;
    }
}

export default routeReducer;