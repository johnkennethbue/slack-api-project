import { Route, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin/Signin";
import SignUpForm from "./components/SignUpForm";
import Homepage from "./components/Homepage";
import React, { useState, Fragment } from "react";
import ChatBar from "./components/ChatBar.js/ChatBar";

export const Context = React.createContext();

function App() {
  const [userHeaders, setUserHeaders] = useState({});
  const [channelMessages, setChannelMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [allChannels, setAllChannels] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  console.log(userHeaders);

  return (
    <Context.Provider
      value={{
        userHeaders,
        setUserHeaders,
        channelMessages,
        setChannelMessages,
        userMessages,
        setUserMessages,
        allChannels,
        setAllChannels,
        allUsers,
        setAllUsers,
      }}
    >
      <div className="container">
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/home" component={Homepage} />
          <Route path="/signup" component={SignUpForm} />
        </Switch>
      </div>
    </Context.Provider>
  );
}

export default App;
