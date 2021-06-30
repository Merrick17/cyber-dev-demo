import { LOGIN_USER, LOGOUT_USER } from "../actions/action.types";

const initAuthReducer = {
    auth:false, 
    token:""
}

    const authReducer = (state=initAuthReducer,action)=>{

        let {type,payload} = action ; 
        switch (type) {
            case LOGIN_USER:
                return {...state,auth:true,token:payload}
               
            case LOGOUT_USER:
                return {...state,auth:false,token:""}
            default:
                return state ; 
        }
    }

export default authReducer