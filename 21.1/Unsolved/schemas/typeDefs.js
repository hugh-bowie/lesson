const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		name: String
		email: String
		password: String
		job: String
		country: String
	}
	type Query {
		me: User
		users: [User]
		user(username: String!): User
	}
`;

module.exports = typeDefs;
