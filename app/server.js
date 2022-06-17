const jsonServer=require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json")
const middleware =  jsonServer.defaults({
    static:'./build'
})

const port = Process.env.PORT || 8080;
server.use(middleware);
server.use(
    jsonServer.rewriter({
      "./api":'/$1',
}))

server.use(router);
server.listen(port,()=>{
    console.log(`server is running ${port}`)
})