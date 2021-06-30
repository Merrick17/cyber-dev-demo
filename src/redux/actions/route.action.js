import { NAVIGATE_MAIN_PAGE, NAVIGATE_USER_PAGE } from "./action.types"

export const navigateToMain = ()=>{

    return {
        type:NAVIGATE_MAIN_PAGE
    }
}

export const navigateToUser = ()=>{

    return {
        type:NAVIGATE_USER_PAGE
    }
}