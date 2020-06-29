# ICM-Backend

This is the nodejs backend server for the Integrated Church Management System.

## Get Server Up and Running

- Install mongodb for your platform and architecture

- Install a recent enough nodejs either LTS or Current

- Enable authentication on th DBMS

- Make sure to give yourself root privilleges on the system's admin db

- Create a new user preferably named icm with access to an authenticated db
    named icm_db with your prefered password

- Use the details of your newly created user name and password to setup the db
    configuration for the server.

  - By renaming .env.sample to .env and replace the `db_username` , `db_password`
        and `db_name` with the appropriate `username` `password` and `db name` you
        created.

  - If running a local instance on your device then the `db_host` which is your domain
        will be `localhost` else replace the `db_host` with the appropriate
        domain name of your web server
- Use your package manager preferably yarn to install the server dependencies
by runing

```bash
~ yarn or yarn install   #if you are using yarn

~ npm i or npm install   #if you prefer npm

```

- With the server up and running you should visit [Swagger Api
Documentation](http://localhost:9000/api-docs) or `https://{domain}/api-docs`
to see the list of avilable routes and thier capabilities
