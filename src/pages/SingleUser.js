import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { navigateToUser } from '../redux/actions/route.action';
import { getSingleUserApi } from '../redux/actions/user.action';
import { useToasts } from 'react-toast-notifications'
const SingleUser = () => {
    const { user } = useParams();
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(({ users }) => users)
    const { addToast } = useToasts()
    useEffect(() => {
        dispatch(getSingleUserApi(user,addToast));
        dispatch(navigateToUser()) ; 
    }, [])
    return (
        <div className="w-4/6 h-4/6 flex justify-center self-center my-10 items-center flex-col bg-white rounded">
            <div className="w-full  mx-10  h-24 flex justify-end " >
                <button class="relative inline-block px-7 py-3 mx-5 my-5 font-semibold text-white leading-tight">
                    <span aria-hidden="true" class="absolute inset-0 bg-primary opacity-50 rounded-md">
                    </span>
                    <span class="relative">
                        Edit
                    </span>
                </button>
            </div>
            <div className="flex w-full h-full  justify-center items-center flex-col shadow">
                <img src={selectedUser.avatar} className="h-45 w-45 rounded-full" />
                <h1 className="mt-6 text-textprimary font-semibold">{selectedUser && selectedUser.first_name} {selectedUser && selectedUser.last_name}  </h1>
                <h2 className="mt-3 text-gray-500">{selectedUser && selectedUser.email} </h2>
                <div className="flex flex-row w-1/2 justify-between text-justify  py-5 self-start px-5">
                    <span>Name</span>
                    <span>{selectedUser && selectedUser.first_name} {selectedUser && selectedUser.last_name}</span>
                </div>
                <div className="flex flex-row w-1/2 justify-between text-justify py-5 self-start px-5">
                    <span>Email</span>
                    <span>{selectedUser && selectedUser.email}</span>
                </div>
                <div className="flex flex-row text-justify justify-between text-justify py-5 self-start px-5 ">
                    <span>Bio</span>
                    <span className="text-justify ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a malesuada nisl, non condimentum tellus. Aliquam non dapibus neque. Curabitur semper egestas ex, eget congue enim. Vivamus sit amet eros vel massa vulputate ullamcorper. Maecenas leo purus, vulputate eu condimentum pretium, commodo ut elit. Mauris fringilla ante eu urna fermentum, a ullamcorper velit molestie </span>
                </div>
            </div>

        </div>
    )
}

export default SingleUser
