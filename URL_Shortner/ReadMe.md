
# URL Shortener

URL Shortener is a web application built with Express.js, Node.js, EJS, and MongoDB to create and manage shortened URLs locally. This project follows the MVC (Model-View-Controller) architecture, ensuring a clean and organized codebase. It allows users to input long URLs and generates shorter, more manageable links stored in a MongoDB database.


## Features

URL Shortening: Converts long URLs into short, easy-to-share links.

Local Database: Uses MongoDB to store and manage URLs.

MVC Architecture: Follows the Model-View-Controller pattern for structured and maintainable code.

User-Friendly Interface: Built with EJS for server-side rendering and CSS for styling.

Environment Configuration: Uses .env for secure and flexible configuration.

## Tech Stack

Backend: Express.js, Node.js

Database: MongoDB

Frontend: EJS, CSS

Architecture: MVC (Model-View-Controller)

## Setup Instructions

**Prerequisites**

 - Node.js and npm installed.

 - MongoDB installed and running locally.

**Steps to Run the Project**

 1. Clone the repository:

    ```http
    https://github.com/parth-faldu/express.git
    ```

2. Navigate to the project directory:
    
    ```bash
    cd URL_Shortner  
    ```
3. Install dependencies:

    ```bash
    npm install  
    ```
4. Set up the .env file:

    ```env
    PORT=3000  
    MONGODB_URI=mongodb://127.0.0.1/  
    MONGODB_DATABASE_NAME=urlShortener  
    ```
- Replace PORT with your desired server port.

 - Replace MONGODB_URI with your MongoDB connection string (e.g., if using a cloud database like MongoDB Atlas).

 - Replace MONGODB_DATABASE_NAME with your preferred database name.


**NOTE** :
 If you don’t want to change database configurations, you can directly connect to your local MongoDB server.
