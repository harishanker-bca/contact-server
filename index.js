// steps to gnereate  json sever

//1.import json-server
const jsonServer = require('json-server')

//2. create a sever application
const server = jsonServer.create()

//3.generate a middleware to use in json sever
const middleware = jsonServer.defaults()

//4. Setting up route/ path for json file 
const router = jsonServer.router("db.json")


// 5.setup port number to run sever app
const port = 3000 || process.env.PORT

// use middleware and router to the sever app
server.use(middleware)
server.use(router)

// 7. to listen or run server in specified prt 
server.listen(port, () => {
    console.log(`contact sever app started at port:  http://localhost:${port}/`);
})

//8. To resolve request to server app 
