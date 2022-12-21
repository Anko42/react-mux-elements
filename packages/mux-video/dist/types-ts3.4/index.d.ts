import { MuxMediaProps, StreamTypes, PlaybackTypes, ValueOf, Metadata, MediaError, CmcdTypes } from '@mux/playback-core';
import { PlaybackEngine, Autoplay, ExtensionMimeTypeMap } from '@mux/playback-core';
import CustomVideoElement, { VideoEvents } from './CustomVideoElement';
/** @TODO make the relationship between name+value smarter and more deriveable (CJP) */
declare type AttributeNames = {
    ENV_KEY: 'env-key';
    DEBUG: 'debug';
    METADATA_URL: 'metadata-url';
    PLAYER_SOFTWARE_VERSION: 'player-software-version';
    PLAYER_SOFTWARE_NAME: 'player-software-name';
    BEACON_COLLECTION_DOMAIN: 'beacon-collection-domain';
    CUSTOM_DOMAIN: 'custom-domain';
    DISABLE_COOKIES: 'disable-cookies';
    PLAYBACK_ID: 'playback-id';
    PREFER_PLAYBACK: 'prefer-playback';
    TYPE: 'type';
    STREAM_TYPE: 'stream-type';
    START_TIME: 'start-time';
    PREFER_CMCD: 'prefer-cmcd';
};
export declare const Attributes: AttributeNames;
declare class MuxVideoElement extends CustomVideoElement<HTMLVideoElement> implements Partial<MuxMediaProps> {
    private "MuxVideoElement.#private";
    static readonly observedAttributes: string[];
    constructor();
    preferCmcd: ValueOf<CmcdTypes> | undefined;
    readonly playerInitTime: number;
    playerSoftwareName: string | undefined;
    playerSoftwareVersion: string | undefined;
    readonly _hls: PlaybackEngine | undefined;
    readonly mux: Readonly<HTMLVideoElement['mux']> | undefined;
    readonly error: MediaError | null;
    errorTranslator: ((errorEvent: any) => any) | undefined;
    src: string;
    type: ValueOf<ExtensionMimeTypeMap> | undefined;
    /*@ts-ignore
    @ts-ignore */
    autoplay: Autoplay;
    preload: "" | "auto" | "none" | "metadata";
    debug: boolean;
    disableCookies: boolean;
    startTime: number | undefined;
    playbackId: string | undefined;
    customDomain: string | undefined;
    envKey: string | undefined;
    beaconCollectionDomain: string | undefined;
    streamType: ValueOf<StreamTypes> | undefined;
    preferPlayback: ValueOf<PlaybackTypes> | undefined;
    metadata: Readonly<Metadata> | undefined;
    load(): void;
    unload(): void;
    attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null): void;
    disconnectedCallback(): void;
}
declare type MuxVideoElementType = typeof MuxVideoElement;
declare global {
    var MuxVideoElement: MuxVideoElementType;
}
export { PlaybackEngine, PlaybackEngine as Hls, ExtensionMimeTypeMap as MimeTypes, MediaError, VideoEvents };
export default MuxVideoElement;
