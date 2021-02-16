import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Call from "./components/Modal/Call/Call";
import Layout from "./components/Layout/Layout";
import UserList from "./components/UserList/UserList";
import Conversation from "./components/Conversation/Conversation";
import ConversationChatBar from "./components/ConversationChatBar/ConversationChatBar";
import ConversationChatEmpty from "./components/ConversationChatEmpty/ConversationChatEmpty";

import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <UserList />
          <Conversation>
            <Switch>
              <Route path="/" exact component={ConversationChatEmpty} />
              <Route path="/friend/:id" component={ConversationChatBar} />
              <Redirect to={"/"} />
            </Switch>
          </Conversation>
          <Call />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
