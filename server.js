require('dotenv').config()
console.log(`The server will run on port ${process.env.MY_NAME}`);
console.log(`The secret key ${process.env.MY_CITY} will be used to connect to the third party API`);
console.log(`The server will connect to the database with the user "${process.env.MY_LANGUAGE}" and the password "${process.env.MY_LANGUAGE}"`);