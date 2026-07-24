const books = [
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960,
  },
  { title: "1984", authorName: "George Orwell", releaseYear: 1948 },
  {
    title: "Pride and Prejudice",
    authorName: "Jane Austen",
    releaseYear: 1813,
  },
];

// callbackfunction to sort by year that returns 1, -1 or 0 depending on the comparison of the releaseYear of two books
const sortByYear = (a, b) => {
  if (a.releaseYear > b.releaseYear) {
    return 1;
  } else if (a.releaseYear < b.releaseYear) {
    return -1;
  } else {
    return 0;
  }
};

const filteredBooks = books.filter((book) => book.releaseYear <= 1950);

const sortedBooks = filteredBooks.sort(sortByYear);
