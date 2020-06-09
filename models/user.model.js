module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		fname: {
			type: Sequelize.STRING,
		},
		lname: {
			type: Sequelize.STRING,
		},
		phone: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
		},
	});

	return User;
};
