# CS411-FinalProject


How to run Back-end:

Install Node.JS:
https://nodejs.org/en/download/

Install MySQL:
https://dev.mysql.com/downloads/installer/

if you dont use the installer you'll need to do other setup

Install MongoDB:
google mongodb atlas, make cluster, include sample DB(?) you might just be able to connect to the cluster I made

after everything is setup, go to server folder

```
run npm init

run npm install

npm install mysql

npm install mongodb
```

Then set up mysql server:
```
mysql -u root -p 
(look db.config for password)
```
Create database:
```
mysql>CREATE DATABASE testdb;
```
then run:

node server.js

you should see something like this:

(node:18600) [SEQUELIZE0004] DeprecationWarning: A boolean value was passed to options.operatorsAliases. This is a no-op with v5 and should be removed.
Server is running on port 8080.
Connected to MySQL!
Executing (default): DROP TABLE IF EXISTS `data`;
(node:18600) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
Executing (default): DROP TABLE IF EXISTS `data`;
Executing (default): CREATE TABLE IF NOT EXISTS `data` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255), `description` VARCHAR(255), `published` TINYINT(1), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `data`
Drop and re-sync db.
Connected to MongoDB

How to run front-end:
```
npm start
```

