# AltSchool Africa Third Semester Project

## Project Title: BookStore API

### Project Description

This project is a simple API that allows users to perform CRUD operations on a bookstore with SSO (Auth0 authentication - Log in, Log out). The API allows users to create, read, update, and delete books/authors from the bookstore. All the code is written by our instructor [Rising Odegua](https://www.linkedin.com/in/risingdeveloper/) and this repo is for practice, PRACTICE! PRACTICE!! PRACTICE!!!

### Installation and Setup

#### Clone the repository:

```bash
git clone https://github.com/Abiodun001-world/bookstore-final-project.git
```

#### Navigate to the project directory:

```bash
cd bookstore-final-project
```

#### Install dependencies:

```bash
npm install
```

#### Create an `.env` file in the root directory:

```plaintext
PORT=
MONGO_URI=
AUTH0_SECRET=
AUTH0_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_ISSUER_BASE_URL=
```

#### Start the application:
```bash
npm start
```
### Access the application within your local machine:

- Access the application via [http://localhost:4000](http://localhost:4000)
- Login to the application via [http://localhost:4000/login](http://localhost:4000/login)
- Logout of the application via [http://localhost:4000/logout](http://localhost:4000/logout): You will be automatically logged out, but you might still see all the authors and books in the database unless you refresh the page. If you refresh the page, you should be redirected to the login route.

### API Structure:

[BookStore API Structure](https://hackmd.io/@aiodun001-world/Bk_XlYUdJg)

### API Endpoints:

[BookStore API Documentation](https://documenter.getpostman.com/view/28730642/2sAYX5KNKR)

### Hosted Link:
[BookStore API](https://bookstore-final-project-7ko4.onrender.com/)
