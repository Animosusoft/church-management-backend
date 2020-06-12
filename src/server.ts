import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import * as Routes from "./routes/index"
import { config } from "./config/config";
import {name} from "./models/setup.mongo"
import compress from "koa-compress"

const app = new Koa();

const PORT = config.port;

app.use(bodyParser());
app.use(cors({ origin: "*" }));
app.use(logger());
app.use(compress())

app.use(Routes.Home.routes());
app.use(Routes.Login.routes())

const server = app
  .listen(PORT, async () => {
    console.log("Server is listening on port : ", PORT);
  })
  .on("error", (error) => console.error(error));
  const Bernard = new name({names:"Bernard"});
  console.log(Bernard.names);
export default server;
