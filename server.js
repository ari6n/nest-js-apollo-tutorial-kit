import express from 'express';
import { 
  graphqlExpress, 
  graphiqlExpress, 
} from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';
import cors from 'cors';

const GRAPHQL_PORT = 3000;

const graphQLServer = express();

graphQLServer.use('*', cors({ origin: 'http://localhost:51404' })); // comment: replace port number with client's real source port
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
));
