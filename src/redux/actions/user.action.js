import { getApi } from "../../utils/apiUtils"
import { GET_SINGLE_USER, GET_USERS_LIST } from "./action.types"


export const getUserList = (data) => {

    return {
        type: GET_USERS_LIST,
        payload: data
    }

}

export const getUserListApi = (addToast) => async dispatch => {
    try {
        let result = await getApi('users');
        console.log(result);
        if (result.success) {
            dispatch(getUserList(result.result.data));
        } else {
            addToast("Something went wrong", {
                appearance: 'error',
                autoDismiss: true,
            })
        }
    } catch (error) {
        addToast(error.message, {
            appearance: 'error',
            autoDismiss: true,
        })
    }
}

export const getSingleuser = (data) => {
    return {
        type: GET_SINGLE_USER,
        payload: data
    }
}

export const getSingleUserApi = (userID, addToast) => async dispatch => {
    try {

        let result = await getApi(`users/${userID}`);
        if (result.success) {
            dispatch(getSingleuser(result.result.data))
            console.log(result);
        }else {

        }

    } catch (error) {

    }
}