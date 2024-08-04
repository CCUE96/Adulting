const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    comments: [Comment]
    replies: [Reply]
    createdAt: String
    updatedAt: String
  }

  type Comment {
    id: ID!
    commentText: String!
    userId: ID!
    user: User
    replies: [Reply]
    createdAt: String
    updatedAt: String
  }

  type Reply {
    id: ID!
    replyText: String!
    userId: ID!
    commentId: ID!
    user: User
    comment: Comment
    createdAt: String
    updatedAt: String
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input UserUpdateInput {
    username: String
    email: String
    password: String
  }

  input CommentInput {
    userId: ID!
    commentText: String!
  }

  input ReplyInput {
    userId: ID!
    commentId: ID!
    replyText: String!
  }

  type Auth {
    token: String!
    user: User!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    comments: [Comment]
    comment(id: ID!): Comment
    replies: [Reply]
    reply(id: ID!): Reply
  }

  type Mutation {
    createUser(input: UserInput!): Auth
    updateUser(id: ID!, input: UserUpdateInput!): User
    deleteUser(id: ID!): User
    login(email: String!, password: String!): Auth

    createComment(input: CommentInput!): Comment
    updateComment(id: ID!, commentText: String!): Comment
    deleteComment(id: ID!): Comment

    createReply(input: ReplyInput!): Reply
    updateReply(id: ID!, replyText: String!): Reply
    deleteReply(id: ID!): Reply
  }
`;

module.exports = typeDefs;
