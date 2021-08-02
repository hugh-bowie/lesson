const { User } = require('../models');

const resolvers = {
	Query: {
		users: async () => {
			return User.find().select();
		},
	},
};

module.exports = resolvers;
