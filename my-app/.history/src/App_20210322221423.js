import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SearchPage } from "./component/searchPage";

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path="/" exact component={SearchPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
