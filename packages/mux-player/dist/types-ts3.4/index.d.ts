import { MediaController } from 'media-chrome';
import { MediaError } from '@mux/mux-video';
import { ValueOf, Metadata, PlaybackTypes, PlaybackEngine, CmcdTypes } from '@mux/playback-core';
import VideoApiElement from './video-api';
import { AttributeTokenList } from './helpers';
export { MediaError };
export declare type Tokens = {
    playback?: string;
    thumbnail?: string;
    storyboard?: string;
};
declare class MuxPlayerElement extends VideoApiElement {
    private "MuxPlayerElement.#private";
    static readonly observedAttributes: string[];
    constructor();
    readonly theme: Element | null | undefined;
    readonly mediaController: MediaController | null | undefined;
    readonly metadataFromAttrs: {
        [key: string]: string;
    };
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string): void;
    preferCmcd: ValueOf<CmcdTypes> | undefined;
    readonly hasPlayed: boolean;
    readonly inLiveWindow: boolean | undefined;
    readonly _hls: PlaybackEngine | undefined;
    readonly mux: Readonly<import("../../../types/mux").MuxOnVideoElement | import("../../../types/mux").DeletedMuxOnVideoElement | undefined>;
    /*
    * Get Mux asset playback id.
    
    
    * Set Mux asset playback id.
    */
    playbackId: string | undefined;
    /*
    * Get the string that reflects the src HTML attribute, which contains the URL of a media resource to use.
    
    
    * Set the string that reflects the src HTML attribute, which contains the URL of a media resource to use.
    */
    src: string | undefined;
    /*
    * Gets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
    
    
    * Sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
    */
    poster: string | undefined;
    /*
    * Return the storyboard URL when a playback ID is provided,
    * we aren't an audio player and the stream-type isn't live.
    */
    readonly storyboard: string | undefined;
    /*
    * Gets the boolean indicator this is an audio player.
    
    
    * Sets the boolean indicator this is an audio player.
    */
    audio: boolean;
    readonly hotkeys: AttributeTokenList;
    nohotkeys: boolean;
    /*
    * Get the thumbnailTime offset used for the poster image.
    
    
    * Set the thumbnailTime offset used for the poster image.
    */
    thumbnailTime: number | undefined;
    /*
    * Get the title shown in the player.
    
    
    * Set the title shown in the player.
    */
    title: string;
    /*
    * Gets the data URL of a placeholder image shown before the thumbnail is loaded.
    
    
    * Sets the data URL of a placeholder image shown before the thumbnail is loaded.
    */
    placeholder: string;
    /*
    * Get the primary color used by the player.
    
    
    * Set the primary color used by the player.
    */
    primaryColor: string | undefined;
    /*
    * Get the secondary color used by the player.
    
    
    * Set the secondary color used by the player.
    */
    secondaryColor: string | undefined;
    defaultShowRemainingTime: boolean | undefined;
    /*
    * Get the playback rates applied to the playback rate control.
    
    
    * Set the playback rates applied to the playback rate control.
    */
    playbackRates: number[] | undefined;
    /*
    * Get the offset applied to the forward seek button.
    
    
    * Set the offset applied to the forward seek button.
    */
    forwardSeekOffset: number | undefined;
    /*
    * Get the offset applied to the backward seek button.
    
    
    * Set the offset applied to the forward seek button.
    */
    backwardSeekOffset: number | undefined;
    /*
    * Get the boolean value of default hidden captions.
    * By default returns false so captions are enabled on initial load.
    
    
    * Set the default hidden captions flag.
    */
    defaultHiddenCaptions: boolean | undefined;
    /*
    * Get the player software name. Used by Mux Data.
    */
    readonly playerSoftwareName: string;
    /*
    * Get the player software version. Used by Mux Data.
    */
    readonly playerSoftwareVersion: any;
    /*
    * Get the beacon collection domain. Used by Mux Data.
    
    
    * Set the beacon collection domain. Used by Mux Data.
    */
    beaconCollectionDomain: string | undefined;
    /*
    * Get Mux asset custom domain.
    
    
    * Set Mux asset custom domain.
    */
    customDomain: string | undefined;
    /*
    * Get Mux Data env key.
    
    
    * Set Mux Data env key.
    */
    envKey: string | undefined;
    /*
    * Get video engine debug flag.
    
    
    * Set video engine debug flag.
    */
    debug: boolean;
    /*
    * Get video engine disable cookies flag.
    
    
    * Set video engine debug flag.
    */
    disableCookies: boolean;
    /*
    * Get stream type.
    
    
    * Set stream type.
    */
    streamType: string | null;
    /*
    * Get the start time.
    
    
    * Set the start time.
    */
    startTime: number | undefined;
    preferPlayback: ValueOf<PlaybackTypes> | undefined;
    /*
    * Get the metadata object for Mux Data.
    
    
    * Set the metadata object for Mux Data.
    */
    metadata: Readonly<Metadata> | undefined;
    /*
    * Get the signing tokens for the Mux asset URL's.
    
    
    * Set the signing tokens for the Mux asset URL's.
    */
    tokens: Tokens;
    /*
    * Get the playback token for signing the src URL.
    
    
    * Set the playback token for signing the src URL.
    */
    playbackToken: string | undefined;
    /*
    * Get the thumbnail token for signing the poster URL.
    
    
    * Set the thumbnail token for signing the poster URL.
    */
    thumbnailToken: string | undefined;
    /*
    * Get the storyboard token for signing the storyboard URL.
    
    
    * Set the storyboard token for signing the storyboard URL.
    */
    storyboardToken: string | undefined;
    addTextTrack(kind: TextTrackKind, label: string, lang?: string, id?: string): any;
    removeTextTrack(track: TextTrack): any;
    readonly textTracks: TextTrackList | undefined;
}
export declare function getVideoAttribute(el: MuxPlayerElement, name: string): string | null;
export default MuxPlayerElement;
