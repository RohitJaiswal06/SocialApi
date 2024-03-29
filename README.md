# Social API using Express and MongoDB

This project is a Social API built using Express.js and MongoDB. It provides endpoints to manage users, posts, comments, and interactions between them in a social networking application.

## Features

- **User Management**: CRUD operations for managing users (create, read, update, delete).
- **Post Management**: Create, read, update, and delete posts.

## Technologies Used

- **Express.js**: A Node.js web application framework used for building the API.
- **MongoDB**: A NoSQL database used to store user data, posts, comments, and interactions.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used to simplify interactions with MongoDB.
- **JWT (JSON Web Tokens)**: Used for authentication and authorization.
- **bcrypt**: A library for hashing passwords before storing them in the database.

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/rohitjaiswal06/SocialApi.git
    ```

2. Navigate to the project directory:

    ```bash
    cd SOCIAL API
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:

    Create a `.env` file in the root directory and add the following variables:

    ```plaintext
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/socialdb
    JWT_SECRET=yoursecretkey
    ```

    Replace the values with your desired configuration.

5. Start the server:

    ```bash
    npm start
    ```

6. The API will be available at `http://localhost:3000`.

## API Endpoints

- **GET /api/user/**: To get All the Users.
- **POST /api/user/signup**: Signup a new User.
- **POST /api/user/login**: Login the user.
- **GET /api/user/:id**: Get user by ID.
- **GET /api/post**: Get all posts.
- **POST /api/post/add**: Add a new Post.
- **POST /api/post/update/:id**: Update a post by its ID.
- **POST /api/post/:id**: Get post by Post ID.
- **POST /api/post/add**: Add a new Post.


## Contribution

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create a pull request.



