const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');



const app = express();

app.use(cors());
// 가상의 데이터베이스 또는 데이터
const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // ...
];

const schema = buildSchema(`
    type Item {
        id: Int!
        name: String!
    }

    type Query {
        getSomeData: [Item]
        getDataById(id: Int!): Item
    }
`);

const root = {
    getSomeData: () => data,
};

app.use('/graphql')

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // GraphiQL 인터페이스 사용 여부
}));

app.listen(3000, () => {
    console.log('Express server is running on port 3000');
});
