require("dotenv").config();

module.exports = {
	HOST: process.env.PG_HOST_NAME,
	USER: process.env.PG_USER_NAME,
	PASSWORD: process.env.PG_PASSWORD,
	PORT: parseInt(process.env.PG_PORT),
	DB: process.env.PG_NAME,
	dialect: "postgres",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
