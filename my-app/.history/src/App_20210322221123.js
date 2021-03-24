import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
