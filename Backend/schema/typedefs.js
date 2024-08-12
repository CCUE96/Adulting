const typeDefs = `
input UserInput{
  username: String
  email:String
  Password:String
}
type User{
     id: ID!
    username: String!
    email: String!
    password: String!
    comments: [Comment]
    replies: [Reply]
}
type Finances{
     id:ID!
     annualIncome:String!
     weeklyIncome:String!
     monthlyIncome:String!
     expenses:Map!
     savings:String!
     investments:Map!
     debts:Map!
     currency:String!
     createdAt:Date
     updatedAt:Date


}
type Fitness{
  userId:ID!
  diet:Map
  groceries:Map
  Workouts:Map

}
type Post{
  title:String!
  content:String!
  author:String!
  date:Date

}
type Comment{
    id: ID!
    author: User!
    commentText: String!
    userId: ID!
    postId: ID!
    replies: [Reply]
    createdAt: Date
}
Type Reply{
    id: ID!
    createdAt: Date!
    content: String!
    username: String!
    userId: ID!
    commentId: ID!
}
type Message{
    id: ID!
    timeSent: Date!
    messageText: String!
    sender: User!
    recipient: User!
}

type Query{
users:[User]
user(id: ID!): User
}`;

module.exports = typeDefs;
