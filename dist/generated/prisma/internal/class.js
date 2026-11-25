"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.1",
    "engineVersion": "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Student {\n  id    Int    @id @default(autoincrement())\n  nim   String @unique\n  nama  String\n  prodi String\n\n  @@map(\"students\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Student\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nim\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nama\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"prodi\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"students\",\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"Student.findUnique\",\"Student.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"Student.findFirst\",\"Student.findFirstOrThrow\",\"Student.findMany\",\"data\",\"Student.createOne\",\"Student.createMany\",\"Student.createManyAndReturn\",\"Student.updateOne\",\"Student.updateMany\",\"Student.updateManyAndReturn\",\"create\",\"update\",\"Student.upsertOne\",\"Student.deleteOne\",\"Student.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Student.groupBy\",\"Student.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"nim\",\"nama\",\"prodi\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"not\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "KwsQBxwAACIAMB0AAAQAEB4AACIAMB8CAAAAASABAAAAASEBACQAISIBACQAIQEAAAABACABAAAAAQAgBxwAACIAMB0AAAQAEB4AACIAMB8CACMAISABACQAISEBACQAISIBACQAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAEHwIAAAABIAEAAAABIQEAAAABIgEAAAABAQgAAAkAIAQfAgAAAAEgAQAAAAEhAQAAAAEiAQAAAAEBCAAACwAwAQgAAAsAMAQfAgArACEgAQAqACEhAQAqACEiAQAqACECAAAAAQAgCAAADgAgBB8CACsAISABACoAISEBACoAISIBACoAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAACUAIBYAACYAIBcAACkAIBgAACgAIBkAACcAIAccAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEiAQAcACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAccAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEiAQAcACENFQAAHgAgFgAAIQAgFwAAHgAgGAAAHgAgGQAAHgAgIwIAAAABJAIAAAAEJQIAAAAEJgIAAAABJwIAAAABKAIAAAABKQIAAAABLQIAIAAhDhUAAB4AIBgAAB8AIBkAAB8AICMBAAAAASQBAAAABCUBAAAABCYBAAAAAScBAAAAASgBAAAAASkBAAAAASoBAAAAASsBAAAAASwBAAAAAS0BAB0AIQ4VAAAeACAYAAAfACAZAAAfACAjAQAAAAEkAQAAAAQlAQAAAAQmAQAAAAEnAQAAAAEoAQAAAAEpAQAAAAEqAQAAAAErAQAAAAEsAQAAAAEtAQAdACEIIwIAAAABJAIAAAAEJQIAAAAEJgIAAAABJwIAAAABKAIAAAABKQIAAAABLQIAHgAhCyMBAAAAASQBAAAABCUBAAAABCYBAAAAAScBAAAAASgBAAAAASkBAAAAASoBAAAAASsBAAAAASwBAAAAAS0BAB8AIQ0VAAAeACAWAAAhACAXAAAeACAYAAAeACAZAAAeACAjAgAAAAEkAgAAAAQlAgAAAAQmAgAAAAEnAgAAAAEoAgAAAAEpAgAAAAEtAgAgACEIIwgAAAABJAgAAAAEJQgAAAAEJggAAAABJwgAAAABKAgAAAABKQgAAAABLQgAIQAhBxwAACIAMB0AAAQAEB4AACIAMB8CACMAISABACQAISEBACQAISIBACQAIQgjAgAAAAEkAgAAAAQlAgAAAAQmAgAAAAEnAgAAAAEoAgAAAAEpAgAAAAEtAgAeACELIwEAAAABJAEAAAAEJQEAAAAEJgEAAAABJwEAAAABKAEAAAABKQEAAAABKgEAAAABKwEAAAABLAEAAAABLQEAHwAhAAAAAAABLgEAAAABBS4CAAAAAS8CAAAAATACAAAAATECAAAAATICAAAAAQAAAAAFFQAGFgAHFwAIGAAJGQAKAAAAAAAFFQAGFgAHFwAIGAAJGQAKAQIBAgMBBQYBBgcBBwgBCQoBCgwCCw0DDA8BDRECDhIEERMBEhQBExUCGhgFGxkL"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map