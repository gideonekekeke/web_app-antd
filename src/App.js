import logo from "./logo.svg";
import "./App.css";
import Antdfile from "./Component/Antdfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Payment from "./Component/Payment";
import Enter from "./Component/Enter";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Antdfile} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/enter" exact component={Enter} />
      </Switch>
    </Router>
  );
}

export default App;
