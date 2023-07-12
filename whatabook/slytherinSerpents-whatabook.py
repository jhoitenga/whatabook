""" Title: slytherinSerpents-whatabook.py
    Author: Michael Christman and Jennifer Hoitenga
    Date: July 12, 2023
    Description: Whatabook Python Console App
    Sources Used:
    Learn Python in One Hour by Programming with Mosh YouTube
    WEB 335 Python Guide
    Add Colour to Text in Python: https://www.kaggle.com/discussions/general/273188
"""

# Import the MongoClient
from pymongo import MongoClient

# Build a connection string.
client = MongoClient('mongodb+srv://web335_user:s3cr3t@bellevueuniversity.g473hiy.mongodb.net/whatabookretryWrites=true&w=majority')
db = client['whatabook']
print(client)

# Add a blank line for readability.
print()

# Displaying a list of books.
print('Displaying all documents in the books collection:')
for book in db.books.find():
    print("Title:", book.get("title"))
    print("Author:", book.get("author"))
    print("Genre:", book.get("genre"))
    print("Book ID:", book.get("bookId"))
    print() # Add a blank line for readability.

# Displaying a list of books by genre.
genres = ['Fantasy', 'Fiction', 'History', 'Horror', 'Non Fiction', 'Mystery', 'Romance', 'True Crime']

print('Available Genres:')
for genre in genres:
    print(genre)

# Add a blank line for readability.
print()

selected_genre = input('Please select a genre from the list: ')
print('You selected:', selected_genre)

# Add a blank line for readability.
print()

print('Displaying all', selected_genre, 'books:')
for book in db.books.find({"genre": selected_genre}):
    print("Title:", book.get("title"))
    print("Author:", book.get("author"))
    print("Genre:", book.get("genre"))
    print("Book ID:", book.get("bookId"))
    print() # Add a blank line for readability.

# Displaying a list of customers wishlist by customerId.
customer_id = input('Please enter your customer ID to view your wishlist: ')

try:
    customer = db.customers.find_one({"customerId": customer_id}, {"_id": 0, "firstName": 1, "lastName": 1})
    wishlist = db.wishlist.find({"customerId": customer_id}, {"_id": 0, "bookId": 1})

    if customer:
        first_name = customer.get('firstName', '')
        last_name = customer.get('lastName', '')
        print("Customer's Name:", f"{first_name} {last_name}".title())  # Format the name using title case
            
        # Add a blank line for readability.
        print()
        
        print("Wishlist Details:")
        for item in wishlist:
            book_ids = item['bookId']
            book_titles = db.books.find({"bookId": {"$in": book_ids}}, {"_id": 0, "title": 1})
            for book_title in book_titles:
                print("Book title:", book_title['title'])
    else:
        raise Exception("Sorry, customer does not exist in the WhatABook database.")
except Exception as e:
    print("\033[31m" + str(e) + "\033[0m")
