export type TextState = {
    text: string;
};
export type TextAction = {
    type: "push";
    nextChar: string;
} | {
    type: "pop";
};
export type TextAnimationParams = {
    target: string;
    duration: number;
};
export declare function useTextAnimation({ target, duration }: TextAnimationParams): readonly [{
    text: string;
}, (onanimationdone?: () => void) => void, () => void];
//# sourceMappingURL=hook.d.ts.map