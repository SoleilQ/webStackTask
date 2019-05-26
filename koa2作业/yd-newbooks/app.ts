import {InversifyKoaServer} from "inversify-koa-utils";
import "reflect-metadata";
import { Container }  from "./ioc";
import "./ioc/loader";
//基础的容器
const container = new Container();

let server = new InversifyKoaServer(container);

let app = server.build();
app.listen(3000, () => {
  console.log("Inversify 实践SOLID系统启动成功!");
});