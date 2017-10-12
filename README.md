# hacktivpress

A Simple web blog app that allows user to CRUD articles.

## How to start
start your mongodb
```
service mongod start
```

on folder server :
```
npm i
npm start / npm run dev
```

on folder client :
```
npm i
npm run dev
```

## API

HTTP REQ | End Point | Purpose
---------|-----------|---------
POST | /users/register | register user
POST | /users/login | login user
POST | /users/verify | verify user's token
POST | /articles/ | create articles
GET  | /articles/ | get all articles
GET | /articles/:id | get article by id
GET | /articles/u/:userid | get all articles by userid
GET | /articles/c/:catid | get articles by categoryid
PUT | /articles/:id | update article
DELETE | /articles/:id | delete article
