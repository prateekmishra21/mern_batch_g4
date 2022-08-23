//
//
//

import Gret from "./components/greetClass";
import Prateek from "./components/number";
const App = () => {
  let numbers = [43, 5454, 645, 65, 656, 76, 76];
  return (
    <div>
      <p>Hi! Login Your Account</p>
      <Gret tech="MERN" />
      {/* <Prateek num="1" data={numbers} /> */}
    </div>
  );
};

export default App;
