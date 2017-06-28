"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const config = require("config");
const DEBUG = config.get('debug');
const SEPARETOR = '=================================================';
class Logger {
    static d(tag, msg, separetor = false, force = false) {
        if (DEBUG || force) {
            Logger.separete(separetor);
            console.log(tag, colors.yellow(msg));
            Logger.separete(separetor);
        }
    }
    static e(tag, err, separetor = false) {
        if (DEBUG) {
            Logger.separete(separetor);
            console.error(tag, colors.red(err));
            Logger.separete(separetor);
        }
    }
    static obj(tag, msg, obj, separetor = false) {
        if (DEBUG) {
            Logger.separete(separetor);
            console.log(tag, msg);
            if (obj) {
                console.dir(obj);
            }
            Logger.separete(separetor);
        }
    }
    static separete(separetor) {
        if (separetor) {
            console.log(SEPARETOR);
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map