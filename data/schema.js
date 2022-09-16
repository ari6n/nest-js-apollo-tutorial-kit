import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import mocks from './mocks'

const typeDefs = `
type Query {
  testString: String
}
`;

const schema = makeExecutableSchema({typeDefs});

addMockFunctionsToSchema({schema, mocks});

/*
import {
  makeExecutableSchema,
} from 'graphql-tools';
// import mocks from './mocks'
import resolvers from './resolvers';

// schema definition
const typeDefs = `
type Author {   # Author fields are: id, name, and published post
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}
type Post {    # The fields of the post are as follows, including which author wrote this post
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}
# Define query content
type Query {
  author(firstName: String, lastName: String): Author # Query author information
  getFortuneCookie: String
}
`;

// into a compiler provided by graphql
// const schema = makeExecutableSchema({ typeDefs });

// Use this tool to add mock data
// addMockFunctionsToSchema({ schema, mocks });

const schema = makeExecutableSchema({ typeDefs, resolvers });
*/

export default schema;