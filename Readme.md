# Steps to run the Application

- run npm install
- run node index.js
- Open postman to access end points of the application

# Api End Points
- localhost:3001/create-user (POST)
To create a user: name, email, password are the required fields
- localhost:3001/login (POST)
To login email and password are the required fields
- A user can create a task, read his tasks, read a single task, update his tasks and delete his task with the following end points:
-localhost:3001/all-tasks, localhost:3001/tasks/:id, localhost:3001/tasks/:id (patch), localhost:3001/tasks/:id (delete)
Only a logged in user can perform operation on his own tasks and can logout using - localhost:3001/logout-user,

