import { Route, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin/Signin";
import SignUpForm from "./components/SignUpForm";
import Homepage from "./components/Homepage";
import React, { useState, Fragment } from "react";


export const Context = React.createContext();

function App () {
  const [userHeaders, setUserHeaders] = useState({})
  const [messages, setMessages] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})

  console.log(userHeaders)

  return <>

    <Context.Provider value={{
      userHeaders,
      setUserHeaders,
      messages,
      setMessages,
      loggedInUser,
      setLoggedInUser,
    }}>

    <div className="container">
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/home" component={Homepage} />
        <Route path="/signup" component={SignUpForm} />
      </Switch>
    </div>
    </Context.Provider>
    </>
};



export default App;
