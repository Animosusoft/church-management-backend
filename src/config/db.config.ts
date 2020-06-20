import dotenv from "dotenv";

// initialize .env configuration into scope
dotenv.config();

interface dbConfig {
    db_port: String | undefined;
    db_username: String | undefined;
    db_password: String | undefined;
    db_name: String | undefined;
    db_host: String | undefined;
}

const mongoConfig: dbConfig = {
    db_port: process.env.db_port,
    db_username: process.env.db_username,
    db_password: process.env.db_password,
    db_name: process.env.db_name,
    db_host: process.env.db_host,
};

const mongodb_connection_protocol = "mongodb";
const mongo_auth_credentials = `${mongoConfig.db_username}:${mongoConfig.db_password}`;
const mongo_network = `${mongoConfig.db_host}:${mongoConfig.db_port}`;
const default_auth_db = `${mongoConfig.db_name}`;
const connection = {
    options: {
        authSource: `authSource=${mongoConfig.db_name}`,
    },
};

//Standalone No credentials or authentication needed
//const standalone_uri=`${mongodb_connection_protocol}${mongo_network}`

//Standalone installation with access control
//

export const mongo_uri = `${mongodb_connection_protocol}://${mongo_auth_credentials}@${mongo_network}/${default_auth_db}?${connection.options.authSource}`;
