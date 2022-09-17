import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import mocks from './mocks'

const typeDefs = `
# Author type. Fields are: id, name, and published posts (array)
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}

# Post type. Fields are: id, title, text, view-counter, author
type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}

# Definition of queries
type Query {
  testString: String                                                # mocked test string - returns 'It works!'
  author(firstName: String, lastName: String): Author               # request author details - returns found Author-object
  allAuthors: [Author]                                              # request all registered authors - returns array of Author-objects
  getFortuneCookie: String                                          # will be used later
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