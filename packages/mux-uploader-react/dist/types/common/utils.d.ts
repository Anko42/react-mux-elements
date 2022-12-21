declare type KeyTypes = string | number | symbol;
export declare const isNil: (x: unknown) => x is null | undefined;
export declare const isKeyOf: <T = unknown>(k: KeyTypes, o: T) => k is keyof T;
export declare const toNativeAttrName: (propName: string, propValue: any) => string | undefined;
export declare const toStyleAttr: <T>(x: T) => T;
export declare const toNativeAttrValue: (propValue: any, propName: string) => any;
export declare const toNativeProps: (props?: {}) => {
    [k: string]: string;
};
export {};
