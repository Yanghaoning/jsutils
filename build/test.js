const Koa = require('koa')
const serve = require('koa-static')
const open = require('open')
const path = require('path')

const port = 3000;
const rootPath = path.resolve(__dirname,'../')
const app = new Koa();

app.use(serve(rootPath));

app.listen(port, ()=>{
  const url = `http://127.0.0.1:${port}/test/index.html`;
  open(url)
  console.log(`Test server runing  ${url}`);
})