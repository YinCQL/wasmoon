import { BaseDecorationOptions, Decoration } from '../decoration';
import Global from '../global';
import TypeExtension from '../type-extension';
export interface FunctionDecoration extends BaseDecorationOptions {
    receiveArgsQuantity?: boolean;
    receiveThread?: boolean;
    self?: any;
}
export type FunctionType = (...args: any[]) => Promise<any> | any;
export declare function decorateFunction(target: FunctionType, options: FunctionDecoration): Decoration<FunctionType, FunctionDecoration>;
export default function createTypeExtension(thread: Global): TypeExtension<FunctionType, FunctionDecoration>;
