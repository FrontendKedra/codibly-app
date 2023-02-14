import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { AppContainer } from "./features/AppContainer/styled";
import { ViewRenderer } from "./features/ViewRenderer";

function App() {
  return (
    <HashRouter>
      <AppContainer>
        <Switch>
          <Route path="/main">
            <ViewRenderer />
          </Route>
          <Route path="">
            <Redirect to="/main" />
          </Route>
        </Switch>
      </AppContainer>
    </HashRouter>
  );
}

export default App;
