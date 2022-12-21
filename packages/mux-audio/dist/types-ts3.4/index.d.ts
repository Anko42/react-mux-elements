import { MuxMediaProps, StreamTypes, PlaybackTypes, ValueOf, Metadata, MediaError } from '@mux/playback-core';
import { PlaybackEngine, ExtensionMimeTypeMap } from '@mux/playback-core';
import CustomAudioElement, { AudioEvents } from './CustomAudioElement';
declare class MuxAudioElement extends CustomAudioElement<HTMLAudioElement> implements Partial<MuxMediaProps> {
    private "MuxAudioElement.#private";
    static readonly observedAttributes: string[];
    constructor();
    readonly playerInitTime: number;
    readonly playerSoftwareName: string;
    readonly playerSoftwareVersion: string;
    readonly _hls: PlaybackEngine | undefined;
    readonly mux: Readonly<HTMLAudioElement['mux']> | undefined;
    src: string;
    preload: "" | "none" | "metadata" | "auto";
    debug: boolean;
    disableCookies: boolean;
    startTime: number | undefined;
    playbackId: string | undefined;
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
declare type MuxAudioElementType = typeof MuxAudioElement;
declare global {
    var MuxAudioElement: MuxAudioElementType;
}
export { PlaybackEngine, PlaybackEngine as Hls, ExtensionMimeTypeMap as MimeTypes, MediaError, AudioEvents };
export default MuxAudioElement;
