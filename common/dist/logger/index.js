"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = void 0;
const bunyan_1 = __importDefault(require("bunyan"));
const logger = bunyan_1.default.createLogger({ name: "my2app" });
function getLogger(name) {
    return logger.child({ child: name });
}
exports.getLogger = getLogger;
//# sourceMappingURL=index.js.map