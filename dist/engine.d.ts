import Global from './global';
import type LuaWasm from './luawasm';
export default class LuaEngine {
    private cmodule;
    global: Global;
    constructor(cmodule: LuaWasm, { openStandardLibs, injectObjects, enableProxy, traceAllocations }?: {
        openStandardLibs?: boolean | undefined;
        injectObjects?: boolean | undefined;
        enableProxy?: boolean | undefined;
        traceAllocations?: boolean | undefined;
    });
    doString(script: string): Promise<any>;
    doFile(filename: string): Promise<any>;
    doStringSync(script: string): any;
    doFileSync(filename: string): any;
    private callByteCode;
}
