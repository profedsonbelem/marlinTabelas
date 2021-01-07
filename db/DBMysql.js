// const mysql = require('mysql')
const Sequelize = require("sequelize");

const connection = new Sequelize('marlin01','root','arq2020',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;


// module.exports = {
//     execSQLQuery: () => {
//         const connection = mysql.createConnection({
//             //host: "10.190.4.17",
//             // user: "marlindba",
//             host: "localhost",
//             user: "root",
//             port: "3306",
//             // password: "SZi!VerC0ch.tr",
//             password: "coti",

//             database: "marlin01"
//         });
      
//         return connection
//         // module.exports = connection;
//     }
    
// }




