"use strict"

const mysql = require("mysql");
const connection =  mysql.createPool({
	host			:	"localhost",       
	user			: 	"jeezdave",
	password		: 	"f^h9w0U5",
	database		:	"ragemp-rp",
});

connection.getConnection(function(e) {
	if (e) 	{
		console.log("DATABASE IS NOT WORKING");
		throw e;
	}
	else 	{
		console.log(`DATABASE IS WORKING`);
	}
});

module.exports = connection;
