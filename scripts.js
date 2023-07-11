/**
 * Title: scripts.js
 * Author: Michael Christman and Jennifer Hoitenga
 * Date: July 11th, 2023
 * Description: MongoDB Shell Scripts for the books and customers collections.
 * Sources Used:
 * WEB 335 houses.js by Professor Krasso
 */

// Delete the books, customers and wishlist collections.
db.books.drop();
db.customers.drop();
db.wishlist.drop();

// Create the books collection.
db.createCollection('books', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['bookId', 'title', 'genre', 'author'],
      properties: {
        title: {
          bsonType: 'string',
        },
        genre: {
          bsonType: 'string',
        },
        author: {
          bsonType: 'string',
        },
        bookId: {
          bsonType: 'string',
        },
      },
    },
  },
});

// Create the customers collection.
db.createCollection('customers', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['customerId', 'firstName', 'lastName'],
      properties: {
        firstName: {
          bsonType: 'string',
        },
        lastName: {
          bsonType: 'string',
        },
        customerId: {
          bsonType: 'string',
        },
      },
    },
  },
});

// Create the wishlist collection.
db.createCollection('wishlist', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['customerId', 'bookId', 'title', 'genre', 'author'],
      properties: {
        customerId: {
          bsonType: 'string',
        },
        bookId: {
          bsonType: 'string',
        },
        title: {
          bsonType: 'string',
        },
        genre: {
          bsonType: 'string',
        },
        author: {
          bsonType: 'string',
        },
      },
    },
  },
});

// Adding the book data.
potterPhilos = {
  bookId: '0747532745',
  title: "Harry Potter and the Philosopher's Stone",
  genre: 'Fantasy',
  author: 'J. K. Rowling',
};

frankenstein = {
  bookId: '0486282112',
  title: 'Frankenstein',
  genre: 'Horror',
  author: 'Mary Shelley',
};

flies = {
  bookId: '0399501487',
  title: 'Lord of the Flies',
  genre: 'Fiction',
  author: 'William Golding',
};

hobbit = {
  bookId: '0553471074',
  title: 'The Hobbit',
  genre: 'Fantasy',
  author: 'J.R.R. Tolkien',
};

potterGoblet = {
  bookId: '0439139600',
  title: 'Harry Potter and the Goblet of Fire',
  genre: 'Fantasy',
  author: 'J. K. Rowling',
};

potterSorcerer = {
  bookId: '1338878921',
  title: 'Harry Potter and the Sorcerer’s Stone',
  genre: 'Fantasy',
  author: 'J. K. Rowling',
};

// Insert the books documents.
db.books.insertOne(potterPhilos);
db.books.insertOne(frankenstein);
db.books.insertOne(flies);
db.books.insertOne(hobbit);
db.books.insertOne(potterGoblet);
db.books.insertOne(potterSorcerer);

// Adding the customer data.
emma = {
  customerId: 'c1005',
  firstName: 'Emma',
  lastName: 'Nguyen',
};

mark = {
  customerId: 'c1006',
  firstName: 'Mark',
  lastName: 'Miller',
};

maya = {
  customerId: 'c1007',
  firstName: 'Maya',
  lastName: 'Patel',
};

emmitt = {
  customerId: 'c1008',
  firstName: 'Emmitt',
  lastName: 'Parker',
};

sasha = {
  customerId: 'c1009',
  firstName: 'Sasha',
  lastName: 'Smith',
};

// Insert the customer documents.
db.customers.insertOne(emma);
db.customers.insertOne(mark);
db.customers.insertOne(maya);
db.customers.insertOne(emmitt);
db.customers.insertOne(sasha);

// Adding the wishlist data.
emmaWishlist = [
  {
    customerId: 'c1005',
    bookId: '0399501487',
    title: 'The Lord of the Flies',
    genre: 'Fiction',
    author: 'William Golding',
  },
  {
    customerId: 'c1005',
    bookId: '0486282112',
    title: 'FrankenStein',
    genre: 'Horror',
    author: 'Mary Shelley',
  },
];

markWishlist = [
  {
    customerId: 'c1006',
    bookId: '0553471074',
    title: 'The Hobbit',
    genre: 'Fantasy',
    author: 'J.R.R. Tolkien',
  },
  {
    customerId: 'c1006',
    bookId: '0439139600',
    title: 'Harry Potter and the Goblet of Fire',
    genre: 'Fantasy',
    author: 'J. K. Rowling',
  },
];

mayaWishlist = [
  {
    customerId: 'c1007',
    bookId: '0439139600',
    title: 'Harry Potter and the Goblet of Fire',
    genre: 'Fantasy',
    author: 'J. K. Rowling',
  },
  {
    customerId: 'c1007',
    bookId: '1338878921',
    title: 'Harry Potter and the Sorcerer’s Stone',
    genre: 'Fantasy',
    author: 'J. K. Rowling',
  },
];

emmittWishlist = [
  {
    customerId: 'c1008',
    bookId: '0399501487',
    title: 'The Lord of the Flies',
    genre: 'Fiction',
    author: 'William Golding',
  },
  {
    customerId: 'c1008',
    bookId: '0486282112',
    title: 'FrankenStein',
    genre: 'Horror',
    author: 'Mary Shelley',
  },
];

sashaWishlist = [
  {
    customerId: 'c1009',
    bookId: '0486282112',
    title: 'FrankenStein',
    genre: 'Horror',
    author: 'Mary Shelley',
  },
  {
    customerId: 'c1009',
    bookId: '0553471074',
    title: 'The Hobbit',
    genre: 'Fantasy',
    author: 'J.R.R. Tolkien',
  },
];

// Insert the wishlist collection.
db.wishlist.insertMany(emmaWishlist);
db.wishlist.insertMany(markWishlist);
db.wishlist.insertMany(mayaWishlist);
db.wishlist.insertMany(emmittWishlist);
db.wishlist.insertMany(sashaWishlist);
