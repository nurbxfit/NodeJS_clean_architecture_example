// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var todos_pb = require('./todos_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_Todo(arg) {
  if (!(arg instanceof todos_pb.Todo)) {
    throw new Error('Expected argument of type todo.Todo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_Todo(buffer_arg) {
  return todos_pb.Todo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_TodoRequest(arg) {
  if (!(arg instanceof todos_pb.TodoRequest)) {
    throw new Error('Expected argument of type todo.TodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_TodoRequest(buffer_arg) {
  return todos_pb.TodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodosService = exports.TodosService = {
  getTodo: {
    path: '/todo.Todos/GetTodo',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.TodoRequest,
    responseType: todos_pb.Todo,
    requestSerialize: serialize_todo_TodoRequest,
    requestDeserialize: deserialize_todo_TodoRequest,
    responseSerialize: serialize_todo_Todo,
    responseDeserialize: deserialize_todo_Todo,
  },
  createTodo: {
    path: '/todo.Todos/CreateTodo',
    requestStream: true,
    responseStream: false,
    requestType: todos_pb.Todo,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_todo_Todo,
    requestDeserialize: deserialize_todo_Todo,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getTodos: {
    path: '/todo.Todos/GetTodos',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: todos_pb.Todo,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_todo_Todo,
    responseDeserialize: deserialize_todo_Todo,
  },
};

exports.TodosClient = grpc.makeGenericClientConstructor(TodosService);
