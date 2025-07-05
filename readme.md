# B5A4-LIBRARY-MANAGEMENT-SERVER

* [live link: https://b5-a4-library-management-server.vercel.app/api]
  
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

* **PORT** **DB_URL**

## Features

* Mongoose Schema Vlidation
* Add, retrieve, update, and delete books
* Borrow books with quantity and due date validation
* Automatically reduce book copiew and update availability
* Borrow summary using MongoDB aggregation

## API Endpoints

* **GET /api/books** Get all books by filter, sort and limit method
* **POST /api/books** Create a Book
* **GET /api/books/:id** Update single book
* **PUT /api/books/:id** Update single book
* **DELETE /api/books/:id** Delete single book

* **POST /api/borrow/:id** Create a borrowed book with conditionaly
* **GET /api/borrow** Borrowed Books Summary (Using Aggregation)
