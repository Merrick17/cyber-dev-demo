import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getUserListApi } from '../redux/actions/user.action';
import { Link, useRouteMatch } from 'react-router-dom'
const UserList = () => {
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const { usersList } = useSelector(({ users }) => users);
    useEffect(() => {
        dispatch(getUserListApi());
    }, []);
    return (
        <div className="w-full h-full">
            <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
                <h1 className="py-6 mr-6"> Users List</h1>
                <div class="py-8">
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal">
                                            User fullname
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal">
                                            Email
                                        </th>
                                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal">
                                            Actions
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        usersList && usersList.map((elm) => (
                                            <tr>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0">
                                                            <a href="#" class="block relative">
                                                                <img alt="profil" src={elm.avatar} class="mx-auto object-cover rounded-full h-10 w-10 " />
                                                            </a>
                                                        </div>
                                                        <div class="ml-3">
                                                            <p class="text-gray-900 whitespace-no-wrap">
                                                                {elm.first_name} {elm.last_name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        {elm.email}
                                                    </p>
                                                </td>

                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <Link class="relative inline-block px-7 py-3 font-semibold text-white leading-tight" to={`${match.path}${elm.id}`}>
                                                        <span aria-hidden="true" class="absolute inset-0 bg-primary opacity-50 rounded-md">
                                                        </span>
                                                        <span class="relative">
                                                            Vue
                                                        </span>
                                                    </Link>
                                                </td>
                                            </tr>))
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserList
