import type MuxPlayerElement from '.';
export declare const getPlayerVersion: () => any;
export declare const getSrcFromPlaybackId: (playbackId?: string | undefined, { token, domain }?: {
    token?: string | undefined;
    domain?: string | undefined;
}) => string;
export declare const getPosterURLFromPlaybackId: (playbackId?: string | undefined, { token, thumbnailTime, domain }?: {
    token?: string | undefined;
    domain?: string | undefined;
    thumbnailTime?: number | undefined;
}) => string | undefined;
export declare const getStoryboardURLFromPlaybackId: (playbackId?: string | undefined, { token, domain }?: {
    token?: string | undefined;
    domain?: string | undefined;
}) => string | undefined;
export declare function castThemeName(themeName?: string): string | undefined;
export declare function toPropName(attrName: string): string;
export declare const getLiveTime: (el: MuxPlayerElement) => number | undefined;
export declare const seekToLive: (el: MuxPlayerElement) => void;
export declare const LL_LIVE_SEGMENT_SECS = 1;
export declare const LIVE_SEGMENT_SECS = 5;
export declare const DEFAULT_HOLDBACK = 3;
export declare const LIVE_HOLDBACK_MOE = 0.5;
export declare const isInLiveWindow: (el: MuxPlayerElement) => boolean;
export declare class AttributeTokenList implements Iterable<string> {
    #private;
    constructor(el?: HTMLElement, attr?: string);
    [Symbol.iterator](): IterableIterator<string>;
    get length(): number;
    get value(): string | undefined;
    set value(val: string | undefined);
    toString(): string | undefined;
    item(index: number): string;
    values(): IterableIterator<string>;
    keys(): IterableIterator<number>;
    forEach(callback: (value: string, index: number, list: string[]) => void): void;
    add(...tokens: string[]): void;
    remove(...tokens: string[]): void;
    contains(token: string): boolean;
    toggle(token: string, force: boolean): boolean;
    replace(oldToken: string, newToken: string): void;
}
