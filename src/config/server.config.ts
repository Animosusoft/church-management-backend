import dotenv from "dotenv"
interface portConfig {
  port: String|undefined;
}

// initialize .env variables in scope
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
export const environment : portConfig = {
port:process.env.SERVER_PORT,
}

