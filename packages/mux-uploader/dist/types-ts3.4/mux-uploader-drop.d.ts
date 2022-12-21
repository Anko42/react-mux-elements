import { globalThis } from 'shared-polyfills';
declare class MuxUploaderDropElement extends globalThis.HTMLElement {
    overlayText: HTMLElement;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(attributeName: string, oldValue: string | null, newValue: string | null): void;
    static readonly observedAttributes: string[];
    readonly muxUploader: HTMLElement | null;
    protected _currentDragTarget?: Node;
    setupDragEvents(): void;
}
export default MuxUploaderDropElement;
