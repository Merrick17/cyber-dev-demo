import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Main from "./pages/Main";
import PrivateRoute from "./components/PrivateRoute";
const App = () => {
  return (
    <div className=" h-screen w-screen " >
      <Router>


        <Switch>

          <PrivateRoute path="/main" component={Main} />

          <Route path="/" component={Login} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
