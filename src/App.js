import {Component} from 'react'
import {Switch, Route, HashRouter} from "react-router-dom";
import MainPage from "./components/main/MainPage";
import TermsPage from "./components/terms/TermsPage";
import LoginPage from "./components/login/LoginPage";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";
import BookDetail from "./components/detail/BookDetail";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2196f3',
        },
    },
});

class App extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/terms" component={TermsPage}/>
                        <Route path="/books/:book_id" component={BookDetail}/>
                    </Switch>
                </HashRouter>
            </ThemeProvider>
        )
    }
}

export default App;
