import {BookRepository} from "../api/BookRepository";
import React from "react";
import './BookDetail.css';
import {Chip, TextField} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';

class BookDetail extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        let id = Number(this.props.match.params.book_id);
        let book = new BookRepository().getBook(id);
        console.log(book)
        this.setState({
            book: book
        });
    }

    render() {

        const content = this.state.book ? (
                <div className={"book-container"}>
                    <img alt="book cover" className="detail-image" src={this.state.book.thumbnailAddress}/>
                    <h1>{this.state.book.title}</h1>
                    <h4>{this.state.book.subTitle}</h4>
                    <h4>{this.state.book.author}</h4>
                    <div className={"pages-container"}>
                        <TextField
                            id="tf-current-page"
                            disabled
                            variant="outlined"
                            defaultValue={this.state.book.currentPage}/>
                        <h3>/</h3>
                        <TextField
                            id="tf-pages"
                            disabled
                            variant="outlined"
                            defaultValue={this.state.book.pageCount}/>
                    </div>
                    <div className={"misc-container"}>
                        <div className={"misc-item"}>
                            <h5>Rating</h5>
                            <Rating
                                value={this.state.book.rating}
                                readOnly
                                onChange={(event, newValue) => {
                                    console.log(newValue);
                                }}
                            />
                        </div>
                        <div className={"misc-item"}>
                            <h5>Published Date</h5>
                            <p>{this.state.book.publishedDate}</p>
                        </div>
                    </div>
                    <ul className="detail-labels">
                        {this.state.book.labels
                            .map((label) => (
                                <Chip
                                    key={label.id + label.title}
                                    label={label.title}
                                    className={"detail-chip"}
                                    style={{backgroundColor: removeAlphaChannel(label.hexColor)}}
                                />
                            ))}

                    </ul>
                </div>
            ) :
            (
                <h1>Loading</h1>
            )
        return (
            <div className={"container"}>
                {content}
            </div>
        )
    }
}


function removeAlphaChannel(hexColor) {
    return "#" + hexColor.substring(3, hexColor.length)
}

export default BookDetail
