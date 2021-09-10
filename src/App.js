import { Route, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin/Signin";
import SignUpForm from "./components/SignUpForm";
import Homepage from "./components/Homepage";
import React, { useState, Fragment } from "react";
import ChatBar from "./components/ChatBar/ChatBar";

const savedUser = JSON.parse(localStorage.getItem("user"));

export const Context = React.createContext();

function App() {
  const [userHeaders, setUserHeaders] = useState(savedUser);
  const [channelMessages, setChannelMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [allChannels, setAllChannels] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  function saveUser(user) {
    setUserHeaders(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  console.log(userHeaders);

  return (
    <Context.Provider
      value={{
        userHeaders,
        setUserHeaders: saveUser,
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
      <div className="min-h-screen w-full">
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/chatbar" component={ChatBar} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </Context.Provider>
  );
}

export default App;
