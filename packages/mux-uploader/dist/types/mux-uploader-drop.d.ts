import { globalThis } from 'shared-polyfills';
declare class MuxUploaderDropElement extends globalThis.HTMLElement {
    overlayText: HTMLElement;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(attributeName: string, oldValue: string | null, newValue: string | null): void;
    static get observedAttributes(): string[];
    get muxUploader(): HTMLElement | null;
    protected _currentDragTarget?: Node;
    setupDragEvents(): void;
}
export default MuxUploaderDropElement;
