import {Component} from 'react'
import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";
import MainPage from "./components/main/MainPage";
import TermsPage from "./components/terms/TermsPage";
import LoginPage from "./components/login/LoginPage";

class App extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/terms" component={TermsPage}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default App;
