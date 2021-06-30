import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth.reducer';
import routeReducer from './reducers/route.reducer';
import usersReducer from './reducers/user.reducer';

const rootReducer = combineReducers(
    {
        auth: authReducer,
        users: usersReducer, 
        route:routeReducer
    }
);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;