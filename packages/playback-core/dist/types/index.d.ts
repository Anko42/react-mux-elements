import mux from 'mux-embed';
import Hls from 'hls.js';
import { MediaError } from './errors';
import { addTextTrack, removeTextTrack } from './tracks';
import { StreamTypes, type ValueOf, type PlaybackCore, type MuxMediaProps, type MuxMediaPropsInternal } from './types';
export { mux, Hls, MediaError, addTextTrack, removeTextTrack };
export * from './types';
export declare const generatePlayerInitTime: () => any;
export declare const generateUUID: any;
export declare const toMuxVideoURL: (playbackId?: string | undefined, { domain }?: {
    domain?: string | undefined;
}) => string | undefined;
export declare const getError: (mediaEl: HTMLMediaElement) => MediaError | undefined;
export declare const initialize: (props: Partial<MuxMediaPropsInternal>, mediaEl: HTMLMediaElement, core?: PlaybackCore | undefined) => {
    engine: Hls | undefined;
    setAutoplay: (newAutoplay?: import("./types").Autoplay | undefined) => void;
    setPreload: (val?: "" | "none" | "metadata" | "auto" | undefined) => void;
};
export declare const teardown: (mediaEl?: HTMLMediaElement | null | undefined, core?: PlaybackCore | undefined) => void;
export declare const setupHls: (props: Partial<Pick<MuxMediaPropsInternal, 'debug' | 'streamType' | 'type' | 'startTime' | 'metadata' | 'preferCmcd'>>, mediaEl: Pick<HTMLMediaElement, 'canPlayType'>) => Hls | undefined;
export declare const getStreamTypeConfig: (streamType?: ValueOf<StreamTypes> | undefined) => {};
export declare const isMuxVideoSrc: ({ playbackId, src, customDomain, }: Partial<Pick<MuxMediaPropsInternal, 'playbackId' | 'src' | 'customDomain'>>) => boolean;
export declare const setupMux: (props: Partial<Pick<MuxMediaPropsInternal, 'envKey' | 'playerInitTime' | 'beaconCollectionDomain' | 'errorTranslator' | 'metadata' | 'debug' | 'playerSoftwareName' | 'playerSoftwareVersion' | 'playbackId' | 'src' | 'customDomain' | 'disableCookies'>>, mediaEl: HTMLMediaElement, hlsjs?: Hls | undefined) => void;
export declare const loadMedia: (props: Partial<Pick<MuxMediaProps, 'preferPlayback' | 'src' | 'type' | 'startTime' | 'streamType' | 'autoplay'>>, mediaEl: HTMLMediaElement, hls?: Pick<Hls, "config" | "on" | "once" | "startLoad" | "stopLoad" | "recoverMediaError" | "destroy" | "loadSource" | "attachMedia" | "liveSyncPosition" | "subtitleTracks" | "subtitleTrack"> | undefined) => void;
