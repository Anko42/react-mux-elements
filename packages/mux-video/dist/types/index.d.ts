import { MuxMediaProps, StreamTypes, PlaybackTypes, ValueOf, Metadata, MediaError, CmcdTypes } from '@mux/playback-core';
import type { PlaybackEngine, Autoplay, ExtensionMimeTypeMap } from '@mux/playback-core';
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
    #private;
    static get observedAttributes(): string[];
    constructor();
    get preferCmcd(): ValueOf<CmcdTypes> | undefined;
    set preferCmcd(value: ValueOf<CmcdTypes> | undefined);
    get playerInitTime(): number;
    get playerSoftwareName(): string | undefined;
    set playerSoftwareName(value: string | undefined);
    get playerSoftwareVersion(): string | undefined;
    set playerSoftwareVersion(value: string | undefined);
    get _hls(): PlaybackEngine | undefined;
    get mux(): Readonly<HTMLVideoElement['mux']> | undefined;
    get error(): MediaError | null;
    get errorTranslator(): ((errorEvent: any) => any) | undefined;
    set errorTranslator(value: ((errorEvent: any) => any) | undefined);
    get src(): string;
    set src(val: string);
    get type(): ValueOf<ExtensionMimeTypeMap> | undefined;
    set type(val: ValueOf<ExtensionMimeTypeMap> | undefined);
    /** @ts-ignore */
    get autoplay(): Autoplay;
    /** @ts-ignore */
    set autoplay(val: Autoplay);
    get preload(): "" | "auto" | "none" | "metadata";
    set preload(val: "" | "auto" | "none" | "metadata");
    get debug(): boolean;
    set debug(val: boolean);
    get disableCookies(): boolean;
    set disableCookies(val: boolean);
    get startTime(): number | undefined;
    set startTime(val: number | undefined);
    get playbackId(): string | undefined;
    set playbackId(val: string | undefined);
    get customDomain(): string | undefined;
    set customDomain(val: string | undefined);
    get envKey(): string | undefined;
    set envKey(val: string | undefined);
    get beaconCollectionDomain(): string | undefined;
    set beaconCollectionDomain(val: string | undefined);
    get streamType(): ValueOf<StreamTypes> | undefined;
    set streamType(val: ValueOf<StreamTypes> | undefined);
    get preferPlayback(): ValueOf<PlaybackTypes> | undefined;
    set preferPlayback(val: ValueOf<PlaybackTypes> | undefined);
    get metadata(): Readonly<Metadata> | undefined;
    set metadata(val: Readonly<Metadata> | undefined);
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
