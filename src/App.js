import { Route, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin/Signin";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/signin" component={Signin} />

        <Route path="/signup" component={SignUpForm} />
      </Switch>
    </div>
  );
}

export default App;
