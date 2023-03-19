/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface GroupsOptionalTest {
  int1?: number;
  group?: GroupsOptionalTest_Group;
  int3?: number;
}

export interface GroupsOptionalTest_Group {
  key?: string;
  value?: string;
}

export interface GroupsRepeatedTest {
  int1?: number[];
  group?: GroupsRepeatedTest_Group[];
  int3?: number[];
}

export interface GroupsRepeatedTest_Group {
  key?: string[];
  value?: string[];
}

export interface GroupsNestedTest {
  int1?: number[];
  group?: GroupsNestedTest_Group[];
  int3?: number[];
}

export interface GroupsNestedTest_Group {
  nested?: GroupsNestedTest_Group_Nested[];
}

export interface GroupsNestedTest_Group_Nested {
  nested2?: GroupsNestedTest_Group_Nested_Nested2[];
}

export interface GroupsNestedTest_Group_Nested_Nested2 {
  string1?: string;
}

function createBaseGroupsOptionalTest(): GroupsOptionalTest {
  return { int1: 0, group: undefined, int3: 0 };
}

export const GroupsOptionalTest = {
  encode(message: GroupsOptionalTest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.int1 !== undefined && message.int1 !== 0) {
      writer.uint32(8).int32(message.int1);
    }
    if (message.group !== undefined) {
      GroupsOptionalTest_Group.encode(message.group, writer.uint32(19)).uint32(20);
    }
    if (message.int3 !== undefined && message.int3 !== 0) {
      writer.uint32(24).int32(message.int3);
    }
    if ("_unknownFields" in message) {
      const msgUnknownFields: any = (message as any)["_unknownFields"];
      for (const key of Object.keys(msgUnknownFields)) {
        const values = msgUnknownFields[key] as Uint8Array[];
        for (const value of values) {
          writer.uint32(parseInt(key, 10));
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupsOptionalTest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupsOptionalTest();
    (message as any)._unknownFields = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.int1 = reader.int32();
          continue;
        case 2:
          if (tag != 19) {
            break;
          }

          message.group = GroupsOptionalTest_Group.decode(reader);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.int3 = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);
      const list = (message as any)._unknownFields[tag];

      if (list === undefined) {
        (message as any)._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): GroupsOptionalTest {
    return {
      int1: isSet(object.int1) ? Number(object.int1) : 0,
      group: isSet(object.group) ? GroupsOptionalTest_Group.fromJSON(object.group) : undefined,
      int3: isSet(object.int3) ? Number(object.int3) : 0,
    };
  },

  toJSON(message: GroupsOptionalTest): unknown {
    const obj: any = {};
    message.int1 !== undefined && (obj.int1 = Math.round(message.int1));
    message.group !== undefined &&
      (obj.group = message.group ? GroupsOptionalTest_Group.toJSON(message.group) : undefined);
    message.int3 !== undefined && (obj.int3 = Math.round(message.int3));
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupsOptionalTest>, I>>(base?: I): GroupsOptionalTest {
    return GroupsOptionalTest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GroupsOptionalTest>, I>>(object: I): GroupsOptionalTest {
    const message = createBaseGroupsOptionalTest();
    message.int1 = object.int1 ?? 0;
    message.group = (object.group !== undefined && object.group !== null)
      ? GroupsOptionalTest_Group.fromPartial(object.group)
      : undefined;
    message.int3 = object.int3 ?? 0;
    return message;
  },
};

function createBaseGroupsOptionalTest_Group(): GroupsOptionalTest_Group {
  return { key: "", value: "" };
}

export const GroupsOptionalTest_Group = {
  encode(message: GroupsOptionalTest_Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined && message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined && message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if ("_unknownFields" in message) {
      const msgUnknownFields: any = (message as any)["_unknownFields"];
      for (const key of Object.keys(msgUnknownFields)) {
        const values = msgUnknownFields[key] as Uint8Array[];
        for (const value of values) {
          writer.uint32(parseInt(key, 10));
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupsOptionalTest_Group {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupsOptionalTest_Group();
    (message as any)._unknownFields = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);
      const list = (message as any)._unknownFields[tag];

      if (list === undefined) {
        (message as any)._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): GroupsOptionalTest_Group {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: GroupsOptionalTest_Group): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupsOptionalTest_Group>, I>>(base?: I): GroupsOptionalTest_Group {
    return GroupsOptionalTest_Group.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GroupsOptionalTest_Group>, I>>(object: I): GroupsOptionalTest_Group {
    const message = createBaseGroupsOptionalTest_Group();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGroupsRepeatedTest(): GroupsRepeatedTest {
  return { int1: [], group: [], int3: [] };
}

export const GroupsRepeatedTest = {
  encode(message: GroupsRepeatedTest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.int1 !== undefined && message.int1.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.int1) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.group !== undefined && message.group.length !== 0) {
      for (const v of message.group) {
        GroupsRepeatedTest_Group.encode(v!, writer.uint32(19)).uint32(20);
      }
    }
    if (message.int3 !== undefined && message.int3.length !== 0) {
      writer.uint32(26).fork();
      for (const v of message.int3) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if ("_unknownFields" in message) {
      const msgUnknownFields: any = (message as any)["_unknownFields"];
      for (const key of Object.keys(msgUnknownFields)) {
        const values = msgUnknownFields[key] as Uint8Array[];
        for (const value of values) {
          writer.uint32(parseInt(key, 10));
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupsRepeatedTest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupsRepeatedTest();
    (message as any)._unknownFields = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.int1!.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.int1!.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag != 19) {
            break;
          }

          message.group!.push(GroupsRepeatedTest_Group.decode(reader));
          continue;
        case 3:
          if (tag == 24) {
            message.int3!.push(reader.int32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.int3!.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);
      const list = (message as any)._unknownFields[tag];

      if (list === undefined) {
        (message as any)._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): GroupsRepeatedTest {
    return {
      int1: Array.isArray(object?.int1) ? object.int1.map((e: any) => Number(e)) : [],
      group: Array.isArray(object?.group) ? object.group.map((e: any) => GroupsRepeatedTest_Group.fromJSON(e)) : [],
      int3: Array.isArray(object?.int3) ? object.int3.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: GroupsRepeatedTest): unknown {
    const obj: any = {};
    if (message.int1) {
      obj.int1 = message.int1.map((e) => Math.round(e));
    } else {
      obj.int1 = [];
    }
    if (message.group) {
      obj.group = message.group.map((e) => e ? GroupsRepeatedTest_Group.toJSON(e) : undefined);
    } else {
      obj.group = [];
    }
    if (message.int3) {
      obj.int3 = message.int3.map((e) => Math.round(e));
    } else {
      obj.int3 = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupsRepeatedTest>, I>>(base?: I): GroupsRepeatedTest {
    return GroupsRepeatedTest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GroupsRepeatedTest>, I>>(object: I): GroupsRepeatedTest {
    const message = createBaseGroupsRepeatedTest();
    message.int1 = object.int1?.map((e) => e) || [];
    message.group = object.group?.map((e) => GroupsRepeatedTest_Group.fromPartial(e)) || [];
    message.int3 = object.int3?.map((e) => e) || [];
    return message;
  },
};

function createBaseGroupsRepeatedTest_Group(): GroupsRepeatedTest_Group {
  return { key: [], value: [] };
}

export const GroupsRepeatedTest_Group = {
  encode(message: GroupsRepeatedTest_Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined && message.key.length !== 0) {
      for (const v of message.key) {
        writer.uint32(10).string(v!);
      }
    }
    if (message.value !== undefined && message.value.length !== 0) {
      for (const v of message.value) {
        writer.uint32(18).string(v!);
      }
    }
    if ("_unknownFields" in message) {
      const msgUnknownFields: any = (message as any)["_unknownFields"];
      for (const key of Object.keys(msgUnknownFields)) {
        const values = msgUnknownFields[key] as Uint8Array[];
        for (const value of values) {
          writer.uint32(parseInt(key, 10));
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupsRepeatedTest_Group {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupsRepeatedTest_Group();
    (message as any)._unknownFields = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key!.push(reader.string());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value!.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);
      const list = (message as any)._unknownFields[tag];

      if (list === undefined) {
        (message as any)._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): GroupsRepeatedTest_Group {
    return {
      key: Array.isArray(object?.key) ? object.key.map((e: any) => String(e)) : [],
      value: Array.isArray(object?.value) ? object.value.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: GroupsRepeatedTest_Group): unknown {
    const obj: any = {};
    if (message.key) {
      obj.key = message.key.map((e) => e);
    } else {
      obj.key = [];
    }
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupsRepeatedTest_Group>, I>>(base?: I): GroupsRepeatedTest_Group {
    return GroupsRepeatedTest_Group.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GroupsRepeatedTest_Group>, I>>(object: I): GroupsRepeatedTest_Group {
    const message = createBaseGroupsRepeatedTest_Group();
    message.key = object.key?.map((e) => e) || [];
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

function createBaseGroupsNestedTest(): GroupsNestedTest {
  return { int1: [], group: [], int3: [] };
}

export const GroupsNestedTest = {
  encode(message: GroupsNestedTest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.int1 !== undefined && message.int1.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.int1) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.group !== undefined && message.group.length !== 0) {
      for (const v of message.group) {
        GroupsNestedTest_Group.encode(v!, writer.uint32(19)).uint32(20);
      }
    }
    if (message.int3 !== undefined && message.int3.length !== 0) {
      writer.uint32(26).fork();
      for (const v of message.int3) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if ("_unknownFields" in message) {
      const msgUnknownFields: any = (message as any)["_unknownFields"];
      for (const key of Object.keys(msgUnknownFields)) {
        const values = msgUnknownFields[key] as Uint8Array[];
        for (const value of values) {
          writer.uint32(parseInt(key, 10));
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupsNestedTest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupsNestedTest();
    (message as any)._unknownFields = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.int1!.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.int1!.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag != 19) {
            break;
          }

          message.group!.push(GroupsNestedTest_Group.decode(reader));
          continue;
        case 3:
          if (tag == 24) {
            message.int3!.push(reader.int32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.int3!.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);
      const list = (message as any)._unknownFields[tag];

      if (list === undefined) {
        (message as any)._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): GroupsNestedTest {
    return {
      int1: Array.isArray(object?.int1) ? object.int1.map((e: any) => Number(e)) : [],
      group: Array.isArray(object?.group) ? object.group.map((e: any) => GroupsNestedTest_Group.fromJSON(e)) : [],
      int3: Array.isArray(object?.int3) ? object.int3.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: GroupsNestedTest): unknown {
    const obj: any = {};
    if (message.int1) {
      obj.int1 = message.int1.map((e) => Math.round(e));
    } else {
      obj.int1 = [];
    }
    if (message.group) {
      obj.group = message.group.map((e) => e ? GroupsNestedTest_Group.toJSON(e) : undefined);
    } else {
      obj.group = [];
    }
    if (message.int3) {
      obj.int3 = message.int3.map((e) => Math.round(e));
    } else {
      obj.int3 = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupsNestedTest>, I>>(base?: I): GroupsNestedTest {
    return GroupsNestedTest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GroupsNestedTest>, I>>(object: I): GroupsNestedTest {
    const message = createBaseGroupsNestedTest();
    message.int1 = object.int1?.map((e) => e) || [];
    message.group = object.group?.map((e) => GroupsNestedTest_Group.fromPartial(e)) || [];
    message.int3 = object.int3?.map((e) => e) || [];
    return message;
  },
};

function createBaseGroupsNestedTest_Group(): GroupsNestedTest_Group {
  return { nested: [] };
}

export const GroupsNestedTest_Group = {
  encode(message: GroupsNestedTest_Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nested !== undefined && message.nested.length !== 0) {
      for (const v of message.nested) {
        GroupsNestedTest_Group_Nested.encode(v!, writer.uint32(11)).uint32(12);
      }
    }
    if ("_unknownFields" in message) {
      const msgUnknownFields: any = (message as any)["_unknownFields"];
      for (const key of Object.keys(msgUnknownFields)) {
        const values = msgUnknownFields[key] as Uint8Array[];
        for (const value of values) {
          writer.uint32(parseInt(key, 10));
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupsNestedTest_Group {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupsNestedTest_Group();
    (message as any)._unknownFields = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 11) {
            break;
          }

          message.nested!.push(GroupsNestedTest_Group_Nested.decode(reader));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);
      const list = (message as any)._unknownFields[tag];

      if (list === undefined) {
        (message as any)._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): GroupsNestedTest_Group {
    return {
      nested: Array.isArray(object?.nested)
        ? object.nested.map((e: any) => GroupsNestedTest_Group_Nested.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GroupsNestedTest_Group): unknown {
    const obj: any = {};
    if (message.nested) {
      obj.nested = message.nested.map((e) => e ? GroupsNestedTest_Group_Nested.toJSON(e) : undefined);
    } else {
      obj.nested = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupsNestedTest_Group>, I>>(base?: I): GroupsNestedTest_Group {
    return GroupsNestedTest_Group.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GroupsNestedTest_Group>, I>>(object: I): GroupsNestedTest_Group {
    const message = createBaseGroupsNestedTest_Group();
    message.nested = object.nested?.map((e) => GroupsNestedTest_Group_Nested.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGroupsNestedTest_Group_Nested(): GroupsNestedTest_Group_Nested {
  return { nested2: [] };
}

export const GroupsNestedTest_Group_Nested = {
  encode(message: GroupsNestedTest_Group_Nested, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nested2 !== undefined && message.nested2.length !== 0) {
      for (const v of message.nested2) {
        GroupsNestedTest_Group_Nested_Nested2.encode(v!, writer.uint32(19)).uint32(20);
      }
    }
    if ("_unknownFields" in message) {
      const msgUnknownFields: any = (message as any)["_unknownFields"];
      for (const key of Object.keys(msgUnknownFields)) {
        const values = msgUnknownFields[key] as Uint8Array[];
        for (const value of values) {
          writer.uint32(parseInt(key, 10));
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupsNestedTest_Group_Nested {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupsNestedTest_Group_Nested();
    (message as any)._unknownFields = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 19) {
            break;
          }

          message.nested2!.push(GroupsNestedTest_Group_Nested_Nested2.decode(reader));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);
      const list = (message as any)._unknownFields[tag];

      if (list === undefined) {
        (message as any)._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): GroupsNestedTest_Group_Nested {
    return {
      nested2: Array.isArray(object?.nested2)
        ? object.nested2.map((e: any) => GroupsNestedTest_Group_Nested_Nested2.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GroupsNestedTest_Group_Nested): unknown {
    const obj: any = {};
    if (message.nested2) {
      obj.nested2 = message.nested2.map((e) => e ? GroupsNestedTest_Group_Nested_Nested2.toJSON(e) : undefined);
    } else {
      obj.nested2 = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupsNestedTest_Group_Nested>, I>>(base?: I): GroupsNestedTest_Group_Nested {
    return GroupsNestedTest_Group_Nested.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GroupsNestedTest_Group_Nested>, I>>(
    object: I,
  ): GroupsNestedTest_Group_Nested {
    const message = createBaseGroupsNestedTest_Group_Nested();
    message.nested2 = object.nested2?.map((e) => GroupsNestedTest_Group_Nested_Nested2.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGroupsNestedTest_Group_Nested_Nested2(): GroupsNestedTest_Group_Nested_Nested2 {
  return { string1: "" };
}

export const GroupsNestedTest_Group_Nested_Nested2 = {
  encode(message: GroupsNestedTest_Group_Nested_Nested2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.string1 !== undefined && message.string1 !== "") {
      writer.uint32(10).string(message.string1);
    }
    if ("_unknownFields" in message) {
      const msgUnknownFields: any = (message as any)["_unknownFields"];
      for (const key of Object.keys(msgUnknownFields)) {
        const values = msgUnknownFields[key] as Uint8Array[];
        for (const value of values) {
          writer.uint32(parseInt(key, 10));
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupsNestedTest_Group_Nested_Nested2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupsNestedTest_Group_Nested_Nested2();
    (message as any)._unknownFields = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.string1 = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);
      const list = (message as any)._unknownFields[tag];

      if (list === undefined) {
        (message as any)._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): GroupsNestedTest_Group_Nested_Nested2 {
    return { string1: isSet(object.string1) ? String(object.string1) : "" };
  },

  toJSON(message: GroupsNestedTest_Group_Nested_Nested2): unknown {
    const obj: any = {};
    message.string1 !== undefined && (obj.string1 = message.string1);
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupsNestedTest_Group_Nested_Nested2>, I>>(
    base?: I,
  ): GroupsNestedTest_Group_Nested_Nested2 {
    return GroupsNestedTest_Group_Nested_Nested2.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GroupsNestedTest_Group_Nested_Nested2>, I>>(
    object: I,
  ): GroupsNestedTest_Group_Nested_Nested2 {
    const message = createBaseGroupsNestedTest_Group_Nested_Nested2();
    message.string1 = object.string1 ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}