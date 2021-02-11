import Conversation from "./components/Conversation/Conversation";
import Layout from "./components/Layout/Layout";
import UserList from "./components/UserList/UserList";

import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <UserList />
        <Conversation />
      </Layout>
    </Provider>
  );
}

export default App;
