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
    }
}));

export default function BookCard(props) {
    const classes = useStyles();
    return <Card variant={"outlined"}>
        <img alt="book cover" className="image" src={props.book.thumbnailAddress}/>
        <div className="content">
            <h4>{props.book.title}</h4>
            <p>{props.book.subTitle}</p>
            <p>{props.book.author}</p>
        </div>
        <li className="labels">
            {props.book.labels
                .map((label) => (
                    <Chip
                        label={label.title}
                        className={classes.chip}
                        style={{backgroundColor: removeAlphaChannel(label.hexColor)}}
                    />
                ))}

        </li>
    </Card>
}

function removeAlphaChannel(hexColor) {
    return "#" + hexColor.substring(3, hexColor.length)
}

