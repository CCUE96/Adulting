const typeDefs = `
scalar JSON
scalar Date

input UserInput {
  username: String
  email: String
  password: String
}

input CreateUserInput {
  username: String!
  email: String!
  password: String!
}

input UpdateUserInput {
  username: String
  email: String
  password: String
}

input CreateCommentInput {
  commentText: String!
  userId: ID!
  postId: ID!
}

input CreateReplyInput {
  content: String!
  username: String!
  userId: ID!
  commentId: ID!
}

type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  comments: [Comment]
  replies: [Reply]
}

type Finances {
  id: ID!
  annualIncome: String!
  weeklyIncome: String!
  monthlyIncome: String!
  expenses: JSON
  savings: String!
  investments: JSON
  debts: JSON
  currency: String!
  createdAt: Date
  updatedAt: Date
}

type Fitness {
  userId: ID!
  diet: JSON
  groceries: JSON
  workouts: JSON
}

type Post {
  title: String!
  content: String!
  author: String!
  date: Date
}

type Comment {
  id: ID!
  author: User!
  commentText: String!
  userId: ID!
  postId: ID!
  replies: [Reply]
  createdAt: Date
}

type Reply {
  id: ID!
  createdAt: Date!
  content: String!
  username: String!
  userId: ID!
  commentId: ID!
}

type Message {
  id: ID!
  timeSent: Date!
  messageText: String!
  sender: User!
  recipient: User!
}

type Query {
  users: [User]
  user(id: ID!): User

  finances(id: ID!): Finances
  allFinances: [Finances]

  fitness(userId: ID!): Fitness

  posts: [Post]
  post(title: String!): Post

  comments: [Comment]
  comment(id: ID!): Comment

  replies: [Reply]
  reply(id: ID!): Reply

  messages: [Message]
  message(id: ID!): Message
}

type Mutation {
  createUser(input: CreateUserInput!): User
  updateUser(id: ID!, input: UpdateUserInput!): User
  deleteUser(id: ID!): User
  login(email: String!, password: String!): AuthPayload

  createComment(input: CreateCommentInput!): Comment
  updateComment(id: ID!, commentText: String!): Comment
  deleteComment(id: ID!): Comment

  createReply(input: CreateReplyInput!): Reply
  updateReply(id: ID!, content: String!): Reply
  deleteReply(id: ID!): Reply

  createMessage(
    timeSent: Date!
    messageText: String!
    senderId: ID!
    recipientId: ID!
  ): Message
  updateMessage(
    id: ID!
    timeSent: Date
    messageText: String
  ): Message
  deleteMessage(id: ID!): Message
}

type AuthPayload {
  token: String
  user: User
}
`;

module.exports = typeDefs;