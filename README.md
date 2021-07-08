# Installation :
## Server
- install packages : `npm install`
- start the backend application : `npm start`
backend app runs on `localhost:9000`

## Client
 - install packages : `npm install`
 - start the fronted application : `npm start`
 frontend app runs on `localhost:3000`
 
 # App Explenation :
 ## Server Application :
 created a simple API that returns a JSON with only one object using Express.js
 ```JSON
 {
      name: "Mehrdad",
      lastname: "Khojastefar",
      birth: "1380/03/21",
}
```
## Client Application :
created a front end web application using react and bootstrap.
at the start of our app, it fetches the JSON from `localhost:9000/testApi` 
using JSON placeholder it fetches a fake JSON after clicking on the button and loads the data into the application.
 
