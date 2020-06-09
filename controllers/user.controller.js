const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
	// Validate request
	if (!req.body.fname || !req.body.lname || !req.body.phone || !req.body.email) {
		res.status(400).json({
			message: "Content can not be empty!",
		});
		return;
	}

	// Create a Tutorial
	const user = {
		fname: req.body.fname,
		lname: req.body.lname,
		phone: req.body.phone,
		email: req.body.email,
	};

	// Save User in the database
	User.create(user)
		.then((data) => {
			res.status(201).json(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while creating the Tutorial.",
			});
		});
};

// Find a single User with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	User.findByPk(id)
		.then((data) => {
			if (!data) {
				res.status(404).json({
					message: `User not found`,
				});
			} else {
				res.status(200).json(data);
			}
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message || `Error retrieving Tutorial with id= ${id}`,
			});
		});
};

// Update a User by the id in the request
exports.update = (req, res) => {
	const id = req.params.id;

	User.update(req.body, {
		where: { id },
	})
		.then((num) => {
			if (num[0] === 1) {
				res.status(200).json({
					message: "User was updated successfully.",
				});
			} else {
				res.status(500).json({
					message: `Error updating user with id=${id}, user not found.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).json({
				message: `Error updating user with id=${id}`,
			});
		});
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	User.destroy({
		where: { id },
	})
		.then((num) => {
			if (num === 1) {
				res.status(200).json({
					message: "User Successfully Deleted",
				});
			} else {
				res.status(500).json({
					message: `Error deleting user with id=${id}, user not found.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).json({
				message: `Error deleting user with id=${id}`,
			});
		});
};
