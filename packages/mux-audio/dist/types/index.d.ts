import { MuxMediaProps, StreamTypes, PlaybackTypes, ValueOf, Metadata, MediaError } from '@mux/playback-core';
import type { PlaybackEngine, ExtensionMimeTypeMap } from '@mux/playback-core';
import CustomAudioElement, { AudioEvents } from './CustomAudioElement';
declare class MuxAudioElement extends CustomAudioElement<HTMLAudioElement> implements Partial<MuxMediaProps> {
    #private;
    static get observedAttributes(): string[];
    constructor();
    get playerInitTime(): number;
    get playerSoftwareName(): string;
    get playerSoftwareVersion(): string;
    get _hls(): PlaybackEngine | undefined;
    get mux(): Readonly<HTMLAudioElement['mux']> | undefined;
    get src(): string;
    set src(val: string);
    get preload(): "" | "none" | "metadata" | "auto";
    set preload(val: "" | "none" | "metadata" | "auto");
    get debug(): boolean;
    set debug(val: boolean);
    get disableCookies(): boolean;
    set disableCookies(val: boolean);
    get startTime(): number | undefined;
    set startTime(val: number | undefined);
    get playbackId(): string | undefined;
    set playbackId(val: string | undefined);
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
declare type MuxAudioElementType = typeof MuxAudioElement;
declare global {
    var MuxAudioElement: MuxAudioElementType;
}
export { PlaybackEngine, PlaybackEngine as Hls, ExtensionMimeTypeMap as MimeTypes, MediaError, AudioEvents };
export default MuxAudioElement;
