import {Component} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "./components/main/MainPage";
import TermsPage from "./components/terms/TermsPage";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/terms" component={TermsPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
