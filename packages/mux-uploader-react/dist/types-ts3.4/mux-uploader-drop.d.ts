import React from 'react';
import { CSSProperties } from 'react';
import '@mux/mux-uploader';
import MuxUploaderDropElement from '@mux/mux-uploader';
export declare type MuxUploaderDropRefAttributes = MuxUploaderDropElement;
export declare type MuxUploaderDropProps = {
    overlay?: boolean;
    overlayText?: string;
    style?: CSSProperties & {
        ['--overlay-background-color']?: CSSProperties['backgroundColor'];
    };
    children?: React.ReactNode;
};
declare const MuxUploaderDrop: React.ForwardRefExoticComponent<MuxUploaderDropProps & React.RefAttributes<MuxUploaderDropElement>>;
export default MuxUploaderDrop;
