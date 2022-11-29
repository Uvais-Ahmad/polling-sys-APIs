# Api-Polling-System

## Introduction

Creating a **Polling System API** where anyone can create questions with options and also add votes to it. It is built
using Express, Nodejs, MongoDB.

<br/>

## Features

- Users can create questions (you can add as many questions as you want).
- Users can add options to a question.
- Users can add a vote to an option of question.
- Users can delete a question -> A question can't be deleted if one of it's options has votes.
- Users can delete an option -> An option can't be deleted if it has even one vote given to it.
- Users can view a question with it's options and all the votes given to it.

<br/>

## Important Link:

- **Youtube Video URL**: https://youtu.be/Y2owKOhDQS4
- **Hosting Link**: https://polling-sys1.onrender.com 
- **Sample Postman Documentation Link**: https://documenter.getpostman.com/view/9062378/2s8YevqB89

<br/>

## Routes & URL

- **https://polling-sys1.onrender.com/api/v1/questions/create**
  <p> To create a new question hit the following URL with a post request:</p>
  **we need to pass a urlEncoded form value "content" while requesting**
  

- **https://polling-sys1.onrender.com/api/v1/options/:id/create**
  <p>To create a new option for a question hit the following URL with a post request:</p>
  **we need to pass a "id" of question to create option on that ques**

- **https://polling-sys1.onrender.com/api/v1/options/:id/addVote**
  <p>To increment the count of votes on an option, hit the following URL with a get request:</p>
  **we need to pass a "id" of option to addVote on options**

- **https://polling-sys1.onrender.com/api/v1/questions/:id**
  <p> To view a question and it’s options, hit the following URL with a get request:</p>
  **we need to pass a "id" of question to show ques with all option on that ques**

- **https://polling-sys1.onrender.com/api/v1/options/:id/delete**
  <p> To delete an option, hit the following URL with a delete request: </p>
  **we need to pass a "id" of option to delete option**

- **https://polling-sys1.onrender.com/api/v1/questions/:id/delete**
  <p> To delete a question, hit the following URL with a delete request: </p>
  **we need to pass a "id" of question to delete question**
  
  <br/>

## Tools Used

 <p align="justify">
<img height="140" width="140" src="https://www.startechup.com/wp-content/uploads/January-11-2021-Nodejs-What-it-is-used-for-and-when-where-to-use-it-for-your-enterprise-app-development.jpg">
<img height="140" width="140" src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png">
<img height="140" width="140" src="https://g.foolcdn.com/art/companylogos/square/mdb.png">
<img height="140" width="140" src="https://mms.businesswire.com/media/20210806005076/en/761650/22/postman-logo-vert-2018.jpg">
<img height="140" width="140" src="https://www.pngitem.com/pimgs/m/13-131098_visual-studio-code-logo-hd-png-download.png">
</p>

- Version Control System: Git
- VCS Hosting: GitHub
- Integrated Development Environment: VSCode
  <br/>
  <br/>

## Requirements

For development, you will only need Node.js and a node global package installed in your environement and mongodb for database.

### Node

- Node Installtion on Windows
  Go on to the [official Node.js website](https://nodejs.org/en/) and download the installer. Also, be sure to have `.git` available in your PATH,
  `npm` might need it (You can find [git](https://git-scm.com/)).
- Other operating System
  You can find more information about the installation on the official [Node.js website](https://nodejs.org/en/) and the official [NPM website](https://www.npmjs.com/).

If the installation was successful, you should be able to run the following command.

```
$ node --version
v16.13.0

$ npm --version
8.2.0
```

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

```
$ npm install npm -g

```

<br/>

## To run the project on your local machine:

1. Open terminal.

2. Change the current working directory to the location where you want the cloned directory.

   ```
   $ git clone https://github.com/Uvais-Ahmad/Polling_System_API

   ```

3. Install all the dependencies by running :

   ```
   npm install

   ```

4. Run npm start to run the project at local host, port 8000:

   ```
   $ npm start

   ```

<br/>
