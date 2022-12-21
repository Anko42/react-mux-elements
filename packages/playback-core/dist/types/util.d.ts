import { type MuxMediaProps } from './types';
declare type addEventListenerWithTeardown = <K extends keyof HTMLMediaElementEventMap>(mediaEl: HTMLMediaElement, type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) => void;
export declare const addEventListenerWithTeardown: addEventListenerWithTeardown;
export declare function inSeekableRange(seekable: TimeRanges, duration: number, time: number): boolean;
export declare const toPlaybackIdParts: (playbackIdWithOptionalParams: string) => [string, string?];
export declare const getType: (props: Partial<Pick<MuxMediaProps, 'type' | 'src'>>) => "" | import("./types").MediaTypes;
export declare const inferMimeTypeFromURL: (url: string) => "" | "application/vnd.apple.mpegurl" | "video/mp4";
export {};
