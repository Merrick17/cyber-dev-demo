import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom'
import { logoutUser } from '../redux/actions/auth.action';
import { navigateToMain } from '../redux/actions/route.action';
import SingleUser from './SingleUser';
import UserList from './UserList'
const Main = () => {
    const match = useRouteMatch();
    const route = useSelector(({route})=>route) ; 
    const dispatch = useDispatch() ; 
    const history = useHistory() ; 
    useEffect(()=>{
        dispatch(navigateToMain()) ; 
    },[])
    const handleLogout = ()=>{
        localStorage.clear() ; 
        dispatch(logoutUser()) ; 
        history.replace('/')
    }
    return (
        <div className="bg-second w-full h-full flex flex-col">
            <header class="text-gray-600 body-font shadow bg-white">
                <div class="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span class="ml-3 text-xl">{route}</span>
                    </a>

                    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded textprimary mt-4 md:mt-0" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>
            <Switch>
            <Route path={`${match.path}/:user`} component={SingleUser} />
                <Route path={`${match.path}/`} component={UserList} />
            </Switch>

        </div>
    )
}

export default Main
