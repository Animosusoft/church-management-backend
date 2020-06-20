import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import * as Routes from "./routes/index"
import { environment } from "./config/index";
import compress from "koa-compress"

const app = new Koa();

const PORT = environment.port;

app.use(bodyParser());
app.use(cors({ origin: "*" }));
app.use(logger());
app.use(compress())

app.use(Routes.Home.routes());
app.use(Routes.Login.routes())
app.use(Routes.Member.routes())

const server = app
  .listen(PORT, async () => {
    console.log("Server is listening on port : ", PORT);
  })
  .on("error", (error) => console.error(error));

export default server;
