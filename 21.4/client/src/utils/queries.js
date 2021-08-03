import gql from 'graphql-tag';

export const QUERY_BOOKS = gql`
	query books($title: String!) {
		books(title: $title) {
			_id
			title
			author
			pages
		}
	}
`;
