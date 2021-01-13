import {Card, Chip} from "@material-ui/core";
import React from "react";
import './BookCard.css';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    chip: {
        fontFamily: "Nunito",
        fontWeight: 700,
        color: "white",
        margin: theme.spacing(0.5),
    },
    root: {
        paddingTop: 8,
        paddingBottom: 8
    },
}));

export default function BookCard(props) {
    const classes = useStyles();
    return <Card variant={"outlined"} className={classes.root}>
        <img alt="book cover" className="image" src={props.book.thumbnailAddress}/>
        <div className="content">
            <h4 className={"text"} >{props.book.title}</h4>
            <p className={"text"} >{props.book.subTitle}</p>
            <p className={"text"}>{props.book.author}</p>
        </div>
        <ul className="labels">
            {props.book.labels
                .map((label) => (
                    <Chip
                        key={label.id + label.title}
                        label={label.title}
                        className={classes.chip}
                        style={{backgroundColor: removeAlphaChannel(label.hexColor)}}
                    />
                ))}

        </ul>
    </Card>
}

function removeAlphaChannel(hexColor) {
    return "#" + hexColor.substring(3, hexColor.length)
}

