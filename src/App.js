import Conversation from "./components/Conversation/Conversation";
import Layout from "./components/Layout/Layout";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
      <Layout>
        <UserList />
        <Conversation />
      </Layout>
    </div>
  );
}

export default App;
