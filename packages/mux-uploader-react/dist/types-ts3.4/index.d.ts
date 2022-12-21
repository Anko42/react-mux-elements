import React from 'react';
import { CSSProperties } from 'react';
import '@mux/mux-uploader';
import MuxUploaderDrop from './mux-uploader-drop';
import MuxUploaderElement from '@mux/mux-uploader';
import { MuxUploaderElementEventMap } from '@mux/mux-uploader';
export declare type MuxUploaderRefAttributes = MuxUploaderElement;
interface GenericEventListener<T extends Event = CustomEvent> {
    (evt: T): void;
}
export declare type MuxUploaderProps = {
    id?: string;
    endpoint?: MuxUploaderElement['endpoint'];
    type?: string;
    status?: boolean;
    style?: CSSProperties & {
        ['--uploader-font-family']?: CSSProperties['fontFamily'];
        ['--uploader-font-size']?: CSSProperties['fontSize'];
        ['--uploader-background-color']?: CSSProperties['backgroundColor'];
        ['--button-background-color']?: CSSProperties['backgroundColor'];
        ['--button-border-radius']?: CSSProperties['borderRadius'];
        ['--button-border']?: CSSProperties['border'];
        ['--button-padding']?: CSSProperties['padding'];
        ['--button-hover-text']?: CSSProperties['color'];
        ['--button-hover-background']?: CSSProperties['background'];
        ['--button-active-text']?: CSSProperties['color'];
        ['--button-active-background']?: CSSProperties['background'];
        ['--progress-bar-fill-color']?: CSSProperties['background'];
        ['--progress-radial-fill-color']?: CSSProperties['stroke'];
    };
    children?: React.ReactNode;
    formatProgress?: (percent: number) => string;
    dynamicChunkSize?: boolean;
    onUploadStart?: GenericEventListener<MuxUploaderElementEventMap['uploadstart']>;
    onChunkAttempt?: GenericEventListener<MuxUploaderElementEventMap['chunkattempt']>;
    onChunkSuccess?: GenericEventListener<MuxUploaderElementEventMap['chunksuccess']>;
    onUploadError?: GenericEventListener<MuxUploaderElementEventMap['uploaderror']>;
    onProgress?: GenericEventListener<MuxUploaderElementEventMap['progress']>;
    onSuccess?: GenericEventListener<MuxUploaderElementEventMap['success']>;
} & Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, Exclude<keyof React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'ref'>>;
declare const MuxUploader: React.ForwardRefExoticComponent<{
    id?: string | undefined;
    endpoint?: MuxUploaderElement['endpoint'];
    type?: string | undefined;
    status?: boolean | undefined;
    style?: (React.CSSProperties & {
        "--uploader-font-family"?: CSSProperties['fontFamily'];
        "--uploader-font-size"?: CSSProperties['fontSize'];
        "--uploader-background-color"?: CSSProperties['backgroundColor'];
        "--button-background-color"?: CSSProperties['backgroundColor'];
        "--button-border-radius"?: CSSProperties['borderRadius'];
        "--button-border"?: CSSProperties['border'];
        "--button-padding"?: CSSProperties['padding'];
        "--button-hover-text"?: CSSProperties['color'];
        "--button-hover-background"?: CSSProperties['background'];
        "--button-active-text"?: CSSProperties['color'];
        "--button-active-background"?: CSSProperties['background'];
        "--progress-bar-fill-color"?: CSSProperties['background'];
        "--progress-radial-fill-color"?: CSSProperties['stroke'];
    }) | undefined;
    children?: React.ReactNode;
    formatProgress?: ((percent: number) => string) | undefined;
    dynamicChunkSize?: boolean | undefined;
    onUploadStart?: GenericEventListener<CustomEvent<{
        file: File;
        chunkSize: number;
    }>> | undefined;
    onChunkAttempt?: GenericEventListener<CustomEvent<{
        chunkNumber: number;
        chunkSize: number;
    }>> | undefined;
    onChunkSuccess?: GenericEventListener<CustomEvent<{
        chunk: number;
        chunkSize: number;
        attempts: number;
        timeInterval: number;
        response: any;
    }>> | undefined;
    onUploadError?: GenericEventListener<CustomEvent<{
        message: string;
        chunkNumber?: number | undefined;
        attempts?: number | undefined;
    }>> | undefined;
    onProgress?: GenericEventListener<CustomEvent<number>> | undefined;
    onSuccess?: GenericEventListener<CustomEvent<null | undefined>> | undefined;
} & Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, Exclude<keyof React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref">> & React.RefAttributes<MuxUploaderElement>>;
export { MuxUploaderDrop };
export default MuxUploader;
