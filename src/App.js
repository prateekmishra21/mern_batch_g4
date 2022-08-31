//
//
//

import Counts from "./components/count";
import Greet from "./components/greet";
import CountClass from "./components/countClass";
import Home, { Home2 } from "./components/greetClass";
import Login from "./components/login";
import MyData from "./components/data";
const App = () => {
  return (
    <div>
      <p>Hi! Login Your Account</p>
      <Home name="React" />
      <Home2 name="React" />
      <CountClass />
      <Login />
      <MyData />
    </div>
  );
};

export default App;
