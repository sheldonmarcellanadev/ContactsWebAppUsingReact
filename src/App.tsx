import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddOrEditContact from "./pages/AddOrEditContact";
import ContactList from "./pages/ContactList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ContactList} />
        <Route path="/add-or-edit-contact" component={AddOrEditContact} />
        <Route path="/update-contact/:id" component={AddOrEditContact} />
      </Switch>
    </Router>
  );
}

export default App;
