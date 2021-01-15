
import dummyData from './data.json'

export class BookRepository {

    fetchBooks() {
        return dummyData.books;
    }

    getBook(bookId) {
        return dummyData.books.find(book => book.id === bookId);
    }
}
