import { Options } from 'mux-embed';
import Hls, { HlsConfig } from 'hls.js';
declare type KeyTypes = string | number | symbol;
export declare const isKeyOf: <T = any>(k: KeyTypes, o: T) => k is keyof T;
export declare type ValueOf<T> = T[keyof T];
export declare type Metadata = Partial<Options['data']>;
export declare type PlaybackEngine = Hls;
export declare type PlaybackCore = {
    engine?: PlaybackEngine;
    setAutoplay: (autoplay?: Autoplay) => void;
    setPreload: (preload?: HTMLMediaElement['preload']) => void;
};
export declare type AutoplayTypes = {
    ANY: 'any';
    MUTED: 'muted';
};
export declare const AutoplayTypes: AutoplayTypes;
export declare type Autoplay = boolean | ValueOf<AutoplayTypes>;
export declare type StreamTypes = {
    VOD: 'on-demand';
    ON_DEMAND: 'on-demand';
    LIVE: 'live';
    LL_LIVE: 'll-live';
    DVR: 'live:dvr';
    LL_DVR: 'll-live:dvr';
};
export declare const StreamTypes: StreamTypes;
export declare type PlaybackTypes = {
    MSE: 'mse';
    NATIVE: 'native';
};
export declare const PlaybackTypes: PlaybackTypes;
export declare type CmcdTypes = {
    HEADER: 'header';
    QUERY: 'query';
    NONE: 'none';
};
export declare const CmcdTypes: CmcdTypes;
export declare const CmcdTypeValues: ("none" | "header" | "query")[];
export declare type ExtensionMimeTypeMap = {
    M3U8: 'application/vnd.apple.mpegurl';
    MP4: 'video/mp4';
};
export declare const ExtensionMimeTypeMap: ExtensionMimeTypeMap;
export declare type MimeTypeShorthandMap = {
    HLS: ExtensionMimeTypeMap['M3U8'];
};
export declare const MimeTypeShorthandMap: MimeTypeShorthandMap;
export declare const shorthandKeys: string[];
export declare type MediaTypes = ValueOf<ExtensionMimeTypeMap> | keyof MimeTypeShorthandMap
/** @TODO Figure out a way to "downgrade" derived types below to early TS syntax (e.g. 3.4) instead of explicit versions here (CJP) */
 | 'hls';
export declare const allMediaTypes: MediaTypes[];
export declare type MuxMediaPropTypes = {
    envKey: Options['data']['env_key'];
    debug: Options['debug'] & Hls['config']['debug'];
    metadata: Partial<Options['data']>;
    customDomain: string;
    beaconCollectionDomain: Options['beaconCollectionDomain'];
    errorTranslator: Options['errorTranslator'];
    disableCookies: Options['disableCookies'];
    playbackId: string;
    playerInitTime: Options['data']['player_init_time'];
    preferPlayback: ValueOf<PlaybackTypes> | undefined;
    type: MediaTypes;
    streamType: ValueOf<StreamTypes>;
    startTime: HlsConfig['startPosition'];
    autoPlay?: Autoplay;
    videoQuality?: number;
    autoplay?: Autoplay;
    preferCmcd: ValueOf<CmcdTypes> | undefined;
};
export declare type HTMLMediaElementProps = Partial<Pick<HTMLMediaElement, 'src' | 'preload'>>;
export declare type MuxMediaProps = HTMLMediaElementProps & MuxMediaPropTypes;
export declare type MuxMediaPropsInternal = MuxMediaProps & {
    playerSoftwareName: Options['data']['player_software_name'];
    playerSoftwareVersion: Options['data']['player_software_version'];
};
export {};
