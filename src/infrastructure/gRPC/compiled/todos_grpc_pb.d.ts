// package: todo
// file: todos.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as todos_pb from "./todos_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ITodosService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTodo: ITodosService_IGetTodo;
    createTodo: ITodosService_ICreateTodo;
    getTodos: ITodosService_IGetTodos;
}

interface ITodosService_IGetTodo extends grpc.MethodDefinition<todos_pb.TodoRequest, todos_pb.Todo> {
    path: "/todo.Todos/GetTodo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todos_pb.TodoRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.TodoRequest>;
    responseSerialize: grpc.serialize<todos_pb.Todo>;
    responseDeserialize: grpc.deserialize<todos_pb.Todo>;
}
interface ITodosService_ICreateTodo extends grpc.MethodDefinition<todos_pb.Todo, google_protobuf_empty_pb.Empty> {
    path: "/todo.Todos/CreateTodo";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<todos_pb.Todo>;
    requestDeserialize: grpc.deserialize<todos_pb.Todo>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ITodosService_IGetTodos extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, todos_pb.Todo> {
    path: "/todo.Todos/GetTodos";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<todos_pb.Todo>;
    responseDeserialize: grpc.deserialize<todos_pb.Todo>;
}

export const TodosService: ITodosService;

export interface ITodosServer {
    getTodo: grpc.handleUnaryCall<todos_pb.TodoRequest, todos_pb.Todo>;
    createTodo: grpc.handleClientStreamingCall<todos_pb.Todo, google_protobuf_empty_pb.Empty>;
    getTodos: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, todos_pb.Todo>;
}

export interface ITodosClient {
    getTodo(request: todos_pb.TodoRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    getTodo(request: todos_pb.TodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    getTodo(request: todos_pb.TodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    createTodo(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<todos_pb.Todo>;
    createTodo(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<todos_pb.Todo>;
    createTodo(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<todos_pb.Todo>;
    createTodo(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<todos_pb.Todo>;
    getTodos(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<todos_pb.Todo>;
    getTodos(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<todos_pb.Todo>;
}

export class TodosClient extends grpc.Client implements ITodosClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getTodo(request: todos_pb.TodoRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    public getTodo(request: todos_pb.TodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    public getTodo(request: todos_pb.TodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    public createTodo(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<todos_pb.Todo>;
    public createTodo(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<todos_pb.Todo>;
    public createTodo(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<todos_pb.Todo>;
    public createTodo(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<todos_pb.Todo>;
    public getTodos(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<todos_pb.Todo>;
    public getTodos(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<todos_pb.Todo>;
}
