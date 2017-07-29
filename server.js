import express from 'express';
import { 
  graphqlExpress, 
  graphiqlExpress, 
} from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';
import cors from 'cors';

const GRAPHQL_PORT = 3002;

const graphQLServer = express();

graphQLServer.use('*', cors({ origin: 'http://localhost:51404' })); // 注意：这里要修改成客户端的端口
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
));
