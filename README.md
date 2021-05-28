├── index.js
├── app.js
├── build
│   └── ...
├── controllers
│   └── notes.js
├── models
│   └── note.js
├── package-lock.json
├── package.json
├── utils
│   ├── config.js
│   ├── logger.js
│   └── middleware.js
│   ├─────
##TODO
--App.js Mongoose connection error 
    "logger.error('error connection to MongoDB:', error.message)"
--Package.json 
    "add NODE_ENV to start script, Xref /utils/config.js call"
--FSO-part3.d Validation and ESLint
--FSO-part4.b Testing the backend

###SETUP
express for http library
[admin@localhost hbl-backend]$sudo npm install express

nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
    The contents of package.json have also changed:
    The command is long and quite unpleasant, so let's define a dedicated npm script for it in the package.json file:
[admin@localhost hbl-backend]$sudo npm install --save-dev nodemon

server is in localhost port 3001, and our frontend in localhost port 3000, they do not have the same origin.
[admin@localhost hbl-backend]$sudo npm install cors

[admin@localhost hbl-backend]$sudo npm install mongoose

There are many ways to define the value of an environment variable.
    A sophisticated way is to use the dotenv library. You can install the library with the command:
[admin@localhost hbl-backend]$npm install dotenv

We can allow requests from other origins by using Node's cors middleware.
[admin@localhost hbl-backend]$sudo npm install cors

Implement the functionality for logging in. Install the jsonwebtoken library, 
which allows us to generate JSON web tokens.
[admin@localhost hbl-backend]$ npm install jsonwebtoken

//removes try/catch from methods catching exceptions
[admin@localhost hbl-backend]$npm install express-async-errors

mongoose-unique-validator is a plugin which 
    adds pre-save validation for unique fields within a Mongoose schema.
[admin@localhost hbl-backend]$sudo npm install mongoose-unique-validator

bcrypt installation issue
[admin@localhost hbl-backend]$ sudo npm install --unsafe-perm -g bcrypt

#mongodb installation
sudo yum install mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod

###
LOCAL SETUP

mongodb compass
[admin@localhost Downloads]$ sudo dnf localinstall 'mongodb-compass-1.25.0.x86_64 (1).rpm'
$mongo
$test

#add .env folder with
MONGODB_URI=mongodb://localhost:27017
PORT=

#start up nodeman using
$npm run dev



###

###TODO###
1)
npm install morgan
-configure morgan so it shows the data sent in HTTP POST requests:
https://github.com/expressjs/morgan#creating-new-tokens

2) add variables for dotenv -> utils/config.js 