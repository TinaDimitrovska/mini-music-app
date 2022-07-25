import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import ArtistPage from "./Components/ArtistPage";
import Error from "./Components/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/artistPage/:id" exact component={ArtistPage} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
