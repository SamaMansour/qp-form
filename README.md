# Next.js Login Application

This project is a full-stack web application built with Next.js. It features a secure login system with a backend API and a frontend interface. The application utilizes TypeScript for improved code quality and MongoDB for data storage.

## Features

- Full-stack development with Next.js 13.
- TypeScript integration for type safety and maintainability.
- React Hooks for managing component state and lifecycle.
- RESTful API integration using Next.js API routes.
- MongoDB for user authentication and data storage.

## Prerequisites

To run this project, you need to have the following installed:
- Node.js (version 13 or later)
- npm (usually comes with Node.js)
- MongoDB (local or remote)

## Installation

1. Clone the Repository:

   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
## Install Dependencies
`npm install`

## Environment Setup:

Create a .env.local file in the root directory with the following:
`MONGODB_URI=mongodb://localhost:27017/your-db-name`
`DB_NAME=your-db-name`

## Start Development Server:
`npm run dev`
Visit `http://localhost:3000/auth` in your browser.
## Database Seeding

To get started with a pre-populated set of user data for testing, you need to seed your MongoDB database with the provided JSON file `login.json`.

## Testing
Enter `username:user1` `password:password1` as valid credintials 
Enter `username:user2` `password:password2` as valid credintials
Enter `username:user3` `password:password3` as valid credintials 
- Enter any other Invalid credinitials In order to test

## Tools used in this project
- ant-design
- mongoose



