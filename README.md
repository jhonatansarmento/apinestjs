# apinestjs

A NestJS-based API project designed to manage products with user authentication and role-based access control.

## Features and Functionality

- **User Authentication**: Support for user login with JWT-based token authentication.
- **Role-Based Access Control**: Differentiate user roles (Admin, Customer) to restrict access to certain endpoints.
- **Product Management**: Admins can create, read, update, and delete products.
- **Error Handling**: Custom error handling for invalid credentials and not found errors.
- **Data Validation**: Utilizes class-validator for input validation.

## Technology Stack

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Prisma**: A modern database toolkit for TypeScript and Node.js.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **class-validator**: For validating user inputs.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- A relational database (e.g., PostgreSQL, MySQL) with a Prisma schema set up.

## Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jhonatansarmento/apinestjs.git
   cd apinestjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up your .env file**:
   Create a `.env` file in the root directory of your project and configure your database connection:
   ```plaintext
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
   ```

4. **Migrate your database** (ensure you have Prisma set up):
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Run the application**:
   ```bash
   npm run start
   ```

## Usage Guide

- **Start the server**: After running the application, it should be accessible at `http://localhost:3000`.
  
- **Endpoints**:
  - **Authentication**:
    - `POST /auth/login`: To log in and receive a JWT token.
  
  - **Admin Product Management** (requires Admin role):
    - `POST /admin/products`: Create a new product.
    - `GET /admin/products`: Retrieve all products.
    - `GET /admin/products/:id`: Retrieve a specific product by ID.
    - `PATCH /admin/products/:id`: Update an existing product.
    - `DELETE /admin/products/:id`: Remove a product.

  - **Public Product Access**:
    - `GET /products`: Retrieve a list of products.
    - `GET /products/:slug`: Retrieve a specific product by slug.

## API Documentation

For detailed API documentation, refer to the code comments in the controllers or utilize tools like Swagger for visual API documentation.

## Contributing Guidelines

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they are well tested.
4. Submit a pull request with a clear description of your changes.

## License Information

This project does not specify a license. Please check with the repository owner for information on usage and contributions.

## Contact/Support Information

For support or inquiries, please reach out via the GitHub issues page at [https://github.com/jhonatansarmento/apinestjs/issues](https://github.com/jhonatansarmento/apinestjs/issues).
