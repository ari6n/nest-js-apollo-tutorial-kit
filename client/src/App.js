import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// -------- 添加内容 -------- //
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  gql,
  graphql,
} from 'react-apollo';

// 设置接口地址
const networkInterface = createNetworkInterface({ uri: 'http://localhost:3002/graphql' });

const client = new ApolloClient({
  networkInterface,
});

const Test = ({ data: { loading, error, author } }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <h3>{author.firstName} {author.lastName}</h3>
  );
};
// 查询语句
const query = gql`
  query AuthorQuery {
    author (firstName: "firstName", lastName: "lastName") {
      firstName,
      lastName
    }
  }
`;

const Gtest = graphql(query)(Test);

// -------- 添加内容 -------- //

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Gtest />
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
      </ApolloProvider>
    );
  }
}


export default App;
