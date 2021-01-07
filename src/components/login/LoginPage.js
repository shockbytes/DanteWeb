import React from "react";
import {Button, Card, Divider} from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail'
import './LoginPage.css'
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    loginCard: {
        textAlign: "center",
        width: "40%",
        margin: "200px auto",
        padding: "64px",
        [theme.breakpoints.only('xs')]: {
            width: "90%",
            padding: "8px",
        },
    },
    loginButton: {
        width: "65%",

        [theme.breakpoints.down('sm')]: {
            width: "85%",
        },
        [theme.breakpoints.only('xl')]: {
            width: "40%",
        },
    }
}));

export default function LoginPage() {

    const classes = useStyles();
    return <div className={"background"}>
        <Card className={classes.loginCard} variant={"elevation"}>
            <img className={"login_image"} src={window.location.origin + '/logo192.png'} alt={"Dante Icon"}/>
            <h1>Welcome to Dante!</h1>
            <p>Login with an account to store books online, suggest books to other readers and more.</p>
            <br/>
            <Button className={classes.loginButton} variant="outlined" color={"secondary"} startIcon={<img alt={"Google Icon"} width={24} height={24} src={window.location.origin + '/google_icon.png'}/>}>CONTINUE
                WITH GOOGLE</Button>
            <br/>
            <br/>
            <Button className={classes.loginButton} variant="outlined" color={"primary"} startIcon={<MailIcon />}>CONTINUE
                WITH MAIL</Button>
            <br/>
            <br/>
            <br/><Divider light/>
            <br/>
            <p>By continuing you agree with Dante's <Link to={"/terms"}>Terms of Services</Link>.</p>
        </Card>
    </div>
}
