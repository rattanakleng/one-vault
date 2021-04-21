# One Vault

<p align="center">
    <img src="https://img.shields.io/github/repo-size/rattanakleng/one-vault" />
    <img src="https://img.shields.io/github/issues/rattanakleng/one-vault" />
    <img src="https://img.shields.io/github/last-commit/rattanakleng/one-vault" />
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
</p>

<p align="center">
   <img src="https://img.shields.io/badge/-React-blue" >
   <img src="https://img.shields.io/badge/-Javascript-red" />
   <img src="https://img.shields.io/badge/-Node.js-yellow" />
    <img src="https://img.shields.io/badge/-Mongoose-violet" />
    <img src="https://img.shields.io/badge/-MongoDB-green" />    
   <img src="https://img.shields.io/badge/-Bootstrap-indigo" />
</p>

## Table of Contents
- [Description](#description)
- [Live page](#Live-Page)
- [Application Features](#Application-Features)
- [Programming Language and Tools](#Programming-Language-and-Tools)
- [Page Layout](#Page-Layout)
- [Usage](#Usage)
- [Future Development](#Future-Development)
- [Contributor](#Contributor)
- [License](#License)


## Description

One-Vault is an application that allows users to save their usernames and passwords of any websites and applications in one place. Users can add, view, edit, and delete any passwords and usernames of websites by creating an account with One-Vault. 
 
This application was developed using React, Express, JWT, Bcript, Mongoose, and MongoDB

## Live Page

https://rattanakleng.github.io/one-vault/

## Application Features

- Work in the browser and feature dynamically updated HTML and CSS and responsive.
- All account information is secure with a hash password and JSON Web Token.
- Data is store on MongoDB.
- Verify and check each email that is used to signup for an account to prevent duplicated accounts.
- Each user can only add, edit, view, and delete items in their account.

## Programming Language and Tools

HTML, CSS, JavaScript, React, Mongoose, MongoDB, JSON Web Token(JWT), Bcrypt, Express, and Bootstrap.

## Page Layout

### Register page

![Register page](./img/desktop-layout.JPG)

### Login page

![Login page](./img/desktop-layout.JPG)

### Create a new password page

![Create new password page](./img/desktop-layout.JPG)

### View all passwords page

![View all password page](./img/desktop-layout.JPG)

### Update an exiting password page

![Update an existing password page](./img/desktop-layout.JPG)


## Usage

Install dependencies

```bash
npm install # Install dependencies for server-side
npm client-install # Install dependencies for React client-side
```

### Mongo connection setup

Edit your /config/default.json file to include the correct MongoDB URI

### Run Server

```bash
npm run dev     # Express & React :3000 & :3001
npm run server  # Express API Only :3001
npm run client  # React Client Only :3000
```
## Future Development

Update CSS for mobile layout
Add password filter and sorting to search View Passwords Page
Add password reset/recovery in case the user forgets a log-in password
Create a mobile application

## Contributor
Rattanak Leng 
GitHub: https://github.com/rattanakleng </br>
Linkedin: https://www.linkedin.com/in/rattanak-leng-523660140/

## License
This code is licensed under [MIT](https://opensource.org/licenses/MIT”).