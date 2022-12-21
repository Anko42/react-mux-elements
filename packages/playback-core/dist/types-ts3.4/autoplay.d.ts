import Hls from 'hls.js';
import { Autoplay } from './types';
export declare const isAutoplayValue: (value: unknown) => value is Autoplay;
export declare const setupAutoplay: ({ autoplay: maybeAutoplay }: {
    autoplay?: Autoplay;
}, mediaEl: HTMLMediaElement, hls?: Hls | undefined) => (newAutoplay?: Autoplay | undefined) => void;
export declare const handleAutoplay: (mediaEl: HTMLMediaElement, autoplay: Autoplay) => void;
