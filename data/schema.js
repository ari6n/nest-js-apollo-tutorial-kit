import {
  makeExecutableSchema,
} from 'graphql-tools';
// import mocks from './mocks'
import resolvers from './resolvers';

// 定义schema
const typeDefs = `
type Author {   # 作者的字段有：id，名字，还有 发表的帖子
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}
type Post {    # 帖子的字段有下面这些，包括 这个帖子是哪个作者写的
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}
# 定义查询内容
type Query {
  author(firstName: String, lastName: String): Author # 查询作者信息
  getFortuneCookie: String
}
`;

// 进入graphql提供的一个编译器中
// const schema = makeExecutableSchema({ typeDefs });

// 通过这个工具来添加mock数据
// addMockFunctionsToSchema({ schema, mocks });

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
