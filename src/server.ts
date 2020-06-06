import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import * as Routes from "./routes/index"
import { config } from "./config";

const app = new Koa();

const PORT = config.port;

app.use(bodyParser());
app.use(cors({ origin: "*" }));
app.use(logger());

app.use(Routes.Home.routes());
app.use(Routes.Login.routes())

const server = app
  .listen(PORT, async () => {
    console.log("Server is listening on port : ", PORT);
  })
  .on("error", (error) => console.error(error));
server.close()
export default server;
