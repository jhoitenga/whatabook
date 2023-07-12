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

// Create the customers collection.
db.createCollection('customers', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['customerId', 'firstName', 'lastName'],
      properties: {
        customerId: {
          bsonType: 'string',
        },
        firstName: {
          bsonType: 'string',
        },
        lastName: {
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
      required: ['wishlistId', 'customerId', 'bookId'],
      properties: {
        wishlistId: {
          bsonType: 'string',
        },
        customerId: {
          bsonType: 'string',
        },
        bookId: {
          bsonType: 'array',
          items: {
            bsonType: 'string',
          },
        },
      },
    },
  },
});

// Adding the book data.
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

potterPhilos = {
  bookId: '0747532745',
  title: "Harry Potter and the Philosopher's Stone",
  genre: 'Fantasy',
  author: 'J. K. Rowling',
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

goneGirl = {
  bookId: '0307588378',
  title: 'Gone Girl',
  genre: 'Mystery',
  author: 'Gillian Flynn',
};

flowerMoon = {
  bookId: '0307742482',
  title: 'Killers of the Flower Moon',
  genre: 'Non Fiction',
  author: 'David Grann',
};

haunting = {
  bookId: '1957635002',
  title: 'Haunting Adeline',
  genre: 'Romance',
  author: 'H. D. Carlton',
};

lizzie = {
  bookId: '1501168398',
  title: 'The Trial of Lizzie Borden',
  genre: 'True Crime',
  author: 'Cara Robertson',
};

wwII = {
  bookId: '1465481796',
  title: 'World War II Map by Map',
  genre: 'History',
  author: 'DK',
};

// Insert the books documents.
db.books.insertOne(potterPhilos);
db.books.insertOne(frankenstein);
db.books.insertOne(flies);
db.books.insertOne(hobbit);
db.books.insertOne(potterGoblet);
db.books.insertOne(potterSorcerer);
db.books.insertOne(goneGirl);
db.books.insertOne(flowerMoon);
db.books.insertOne(haunting);
db.books.insertOne(lizzie);
db.books.insertOne(wwII);

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
emmaWishlist = {
  wishlistId: 'w500',
  customerId: 'c1005',
  bookId: ['0399501487', '0486282112', '1957635002'],
};

markWishlist = {
  wishlistId: 'w501',
  customerId: 'c1006',
  bookId: ['0553471074', '0439139600', '1465481796'],
};

mayaWishlist = {
  wishlistId: 'w502',
  customerId: 'c1007',
  bookId: ['0439139600', '1338878921', '0307742482', '0307588378'],
};

emmittWishlist = {
  wishlistId: 'w503',
  customerId: 'c1008',
  bookId: ['0399501487', '0486282112'],
};

sashaWishlist = {
  wishlistId: 'w504',
  customerId: 'c1009',
  bookId: ['0486282112', '0553471074'],
};

// Insert the wishlist collection.
db.wishlist.insertOne(emmaWishlist);
db.wishlist.insertOne(markWishlist);
db.wishlist.insertOne(mayaWishlist);
db.wishlist.insertOne(emmittWishlist);
db.wishlist.insertOne(sashaWishlist);
