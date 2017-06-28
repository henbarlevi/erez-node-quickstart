import * as colors from 'colors';
import * as config from 'config';

const DEBUG: boolean = <boolean>config.get('debug');
const SEPARETOR: string = '=================================================';

export class Logger {

    public static d(tag: string, msg: string, separetor: boolean = false, force: boolean = false) {
        if (DEBUG || force) {
            Logger.separete(separetor);
            console.log(tag, colors.yellow(msg));
            Logger.separete(separetor);
        }
    }

    public static e(tag: string, err: string, separetor: boolean = false) {
        if (DEBUG) {
            Logger.separete(separetor);
            console.error(tag, colors.red(err));
            Logger.separete(separetor);
        }
    }

    public static obj(tag: string, msg: string, obj: Object, separetor: boolean = false) {
        if (DEBUG) {
            Logger.separete(separetor);
            console.log(tag, msg);
            if (obj) {
                console.dir(obj);
            }
            Logger.separete(separetor);
        }
    }

    private static separete(separetor: boolean) {
        if (separetor) { console.log(SEPARETOR) }
    }
}