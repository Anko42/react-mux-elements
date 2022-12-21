import type { MutableRefObject, ForwardedRef } from 'react';
declare type Maybe<T> = T | null | undefined;
declare type RefCb<T> = (instance: Maybe<T>) => void;
declare type RefObj<T> = MutableRefObject<Maybe<T>>;
declare type RefTypes<T> = RefObj<T> | RefCb<T> | ForwardedRef<T>;
interface useCombinedRefs {
    <T>(...refs: Maybe<RefTypes<T>>[]): RefObj<T>;
}
export declare const useCombinedRefs: useCombinedRefs;
export default useCombinedRefs;
