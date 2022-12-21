import { globalThis } from 'shared-polyfills';
import './mux-uploader-drop';
import * as UpChunk from '@mux/upchunk';
declare type Endpoint = UpChunk.UpChunk['endpoint'] | undefined | null;
declare type DynamicChunkSize = UpChunk.UpChunk['dynamicChunkSize'] | undefined;
declare type ErrorDetail = {
    message: string;
    chunkNumber?: number;
    attempts?: number;
};
export interface MuxUploaderElementEventMap extends Pick<HTMLElementEventMap, Exclude<keyof HTMLElementEventMap, 'progress'>> {
    uploadstart: CustomEvent<{
        file: File;
        chunkSize: number;
    }>;
    chunkattempt: CustomEvent<{
        chunkNumber: number;
        chunkSize: number;
    }>;
    chunksuccess: CustomEvent<{
        chunk: number;
        chunkSize: number;
        attempts: number;
        timeInterval: number;
        response: any;
    }>;
    uploaderror: CustomEvent<ErrorDetail>;
    progress: CustomEvent<number>;
    success: CustomEvent<undefined | null>;
}
interface MuxUploaderElement extends HTMLElement {
    addEventListener<K extends keyof MuxUploaderElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: MuxUploaderElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MuxUploaderElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: MuxUploaderElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare class MuxUploaderElement extends globalThis.HTMLElement implements MuxUploaderElement {
    protected _formatProgress: ((percent: number) => string) | null | undefined;
    protected _filePickerButton: HTMLElement | null | undefined;
    protected _endpoint: Endpoint;
    svgCircle: SVGCircleElement | null | undefined;
    progressBar: HTMLElement | null | undefined;
    uploadPercentage: HTMLElement | null | undefined;
    statusMessage: HTMLElement | null | undefined;
    retryButton: HTMLElement | null | undefined;
    srOnlyText: HTMLElement | null | undefined;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected filePickerButton: HTMLElement | null | undefined;
    protected readonly hiddenFileInput: HTMLInputElement;
    handleFilePickerButtonClick(): void;
    endpoint: Endpoint;
    dynamicChunkSize: DynamicChunkSize;
    formatProgress: (percent: number) => string;
    setDefaultType(): void;
    setupRetry(): void;
    resetState(): void;
    setProgress(percent: number): void;
    handleUpload(evt: CustomEvent): void;
}
declare type MuxUploaderElementType = typeof MuxUploaderElement;
declare global {
    var MuxUploaderElement: MuxUploaderElementType;
}
export default MuxUploaderElement;
