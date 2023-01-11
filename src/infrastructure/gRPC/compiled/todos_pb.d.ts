// package: todo
// file: todos.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Todo extends jspb.Message { 
    getId(): number;
    setId(value: number): Todo;
    getTitle(): string;
    setTitle(value: string): Todo;
    getText(): string;
    setText(value: string): Todo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Todo.AsObject;
    static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Todo;
    static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
    export type AsObject = {
        id: number,
        title: string,
        text: string,
    }
}

export class TodoRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): TodoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TodoRequest): TodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TodoRequest;
    static deserializeBinaryFromReader(message: TodoRequest, reader: jspb.BinaryReader): TodoRequest;
}

export namespace TodoRequest {
    export type AsObject = {
        id: number,
    }
}
