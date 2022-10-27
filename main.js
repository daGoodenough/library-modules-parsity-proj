// write your code here to make the tests pass
let Library = function() {
  let books = [];

  function addBook(book){
    books.push(book);
  }

  function checkOutBook(book) {
    if(books.includes(book)){
      book.setAttribute('checkedOut', true);
    }
  }

  function returnBook(book) {
    if(books.includes(book)){
      book.setAttribute('checkedOut', false);
    }
  }

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
}

let Book = function (title, author) {
  let attributes = {
    title: title,
    author: author,
    checkedOut: false
  };

  function getAttribute(attribute) {
      return attributes[attribute];
  };

  function setAttribute(attribute, value) {
    if(attributes.hasOwnProperty(attribute)){
      attributes[attribute] = value;
    }
  };

  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
}