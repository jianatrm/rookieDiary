const http = require('http')
 const server = http.createServer((request,response)=>{
     response.body = ({
         name:123
     })
     response.setHeader('Content-Type', 'text/application')
     response.end('你好世界\n')
 })

server.listen(3000,'127.0.0.1',()=>{
    console.log("node 服务启动")
})