/**
 * Title: slytherinSerpents-whatabook.js
 * Authors: Michael Christman and Jennifer Hoitenga
 * Date: July 11th, 2023
 * Description: Queries for the WEB 335 WhatABook project
 * Sources Used:
 * MongoDB Query Guide
 * mongosh Guide
 */

// Loading the script.js script.
load('scripts.js');

// Writing a query to display a list of all books.
db.books.find();

// Writing a query to display a list of books by genre.
db.books.find({ genre: 'Fantasy' });

// Writing a query to display a list of books by author.
db.books.find({ author: 'J. K. Rowling' });

// Writing a query to display a list of books by bookId.
db.books.find({ bookId: '0486282112' });

// Writing a query to display a wishlist by customerId.
db.wishlist.findOne({ customerId: 'c1005' });

// Writing a query to add a book to a customer's wishlist.
db.wishlist.updateOne({ customerId: 'c1005' }, { $addToSet: { bookId: '148760891' } });

// Writing a query to remove a book from a customer's wishlist.
db.wishlist.updateOne({ customerId: 'c1005' }, { $pull: { bookId: '148760891' } });
