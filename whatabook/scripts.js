/**
 * Title: scripts.js
 * Authors: Michael Christman and Jennifer Hoitenga
 * Date: July 11th, 2023
 * Description: MongoDB Shell Scripts for the books and customers collections.
 * Sources Used:
 * WEB 335 houses.js by Professor Krasso
 */

// Deleting (dropping) the books, customers and wishlist collections.
db.books.drop();
db.customers.drop();
db.wishlist.drop();

// Creating the books collection
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

// Creating the customers collection.
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

// Creating the wishlist collection.
db.createCollection('wishlist', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['customerId', 'bookId'],
      properties: {
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

// Adding the book data for the books collection
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

fellowship = {
  bookId: '0547928211',
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  genre: 'Fantasy',
  author: 'J.R.R. Tolkien',
};

twoTowers = {
  bookId: '0358380243',
  title: 'The Lord of the Rings: The Two Towers',
  genre: 'Fantasy',
  author: 'J.R.R. Tolkien',
};

kingIt = {
  bookId: '0670813028',
  title: 'Stephen King’s IT',
  genre: 'Horror',
  author: 'Stephen King',
};

carrie = {
  bookId: '0307743667',
  title: 'Stephen King’s Carrie',
  genre: 'Horror',
  author: 'Stephen King',
};

fireBlood = {
  bookId: '1524796301',
  title: 'Fire and Blood',
  genre: 'Fantasy',
  author: 'George R.R. Martin',
};

gameThrones = {
  bookId: '0553381687',
  title: 'A Game of Thrones',
  genre: 'Fantasy',
  author: 'George R.R. Martin',
};

inColdBlood = {
  bookId: '0574592798',
  title: 'In Cold Blood',
  genre: 'True Crime',
  author: 'Truman Capote',
};

lifeMafia = {
  bookId: '059647283',
  title: 'Donnie Brasco: My Undercover Life in the Mafia',
  genre: 'True Crime',
  author: 'Joseph D. Pistone',
};

diaryAnne = {
  bookId: '148760891',
  title: 'The Diary of a Young Girl',
  genre: 'History',
  author: 'Anne Frank',
};

iFunny = {
  bookId: '031452607',
  title: 'I Funny: A Middle School Story',
  genre: 'Comedy',
  author: 'James Patterson',
};

// Inserting all the documents for books.
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
db.books.insertOne(fellowship);
db.books.insertOne(twoTowers);
db.books.insertOne(kingIt);
db.books.insertOne(carrie);
db.books.insertOne(fireBlood);
db.books.insertOne(gameThrones);
db.books.insertOne(inColdBlood);
db.books.insertOne(lifeMafia);
db.books.insertOne(diaryAnne);
db.books.insertOne(iFunny);

// Adding the data for the customers
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

// Inserting all of the customer documents.
db.customers.insertOne(emma);
db.customers.insertOne(mark);
db.customers.insertOne(maya);
db.customers.insertOne(emmitt);
db.customers.insertOne(sasha);

// Adding the data for the wishlist
emmaWishlist = {
  customerId: 'c1005',
  bookId: ['0399501487', '0486282112', '1957635002'],
};

markWishlist = {
  customerId: 'c1006',
  bookId: ['0553471074', '0439139600', '1465481796'],
};

mayaWishlist = {
  customerId: 'c1007',
  bookId: ['0439139600', '1338878921', '0307742482', '0307588378'],
};

emmittWishlist = {
  customerId: 'c1008',
  bookId: ['0399501487', '0486282112'],
};

sashaWishlist = {
  customerId: 'c1009',
  bookId: ['0486282112', '0553471074'],
};

// Inserting the wishlist collection documents
db.wishlist.insertOne(emmaWishlist);
db.wishlist.insertOne(markWishlist);
db.wishlist.insertOne(mayaWishlist);
db.wishlist.insertOne(emmittWishlist);
db.wishlist.insertOne(sashaWishlist);
