# L2B5A-LIBRARY-MANAGEMENT

A simple RESTful API built with Express, MonoDB with Mongoose and Typescript.

## Setup Section

### Technologies Used

* **express**
* **mongodb**
* **mongoose**
* **ts-node-dev**
* **dotenv** in dependencies
* **typescript** devDependencies
  
  ### Set Environment Variables in **.env file**

* **PORT** **DB_USER** **DB_PASS**

## Features

* Mongoose Schema Vlidation
* Add, retrieve, update, and delete books
* Borrow books with quantity and due date validation
* Automatically reduce book copiew and update availability
* Borrow summary using MongoDB aggregation
* Use of Aggregation Pipeline
* Filtering and Sorting books by genre, date
* Proper error handling and generic response format
* Mongoose middleware(**pre**, **post**)

## API Endpoints

* **GET /api/books** Get all books by filter, sort and limit method
* **POST /api/books** Create a Book
* **PUT /api/books/:bookId** Update single book
* **DELETE /api/books/:bookId** Delete single book

* **POST /api/borrow** Create a borrowed book with conditionaly
* **GET /api/borrow** Borrowed Books Summary (Using Aggregation)
