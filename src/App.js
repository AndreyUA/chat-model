import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Conversation from "./components/Conversation/Conversation";
import Layout from "./components/Layout/Layout";
import UserList from "./components/UserList/UserList";

import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <UserList />
          <Switch>
            <Route path="/friend/:id" exact component={Conversation} />
            <Route path="/" exact component={Conversation} />
            <Redirect to={"/"} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
