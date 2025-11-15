import type { Dispatch } from "react";
import type { TextAction, TextState } from "./hook.js";
/**
 * {@link getAnimationInterval} object parameters.
 * @property textState A text reducer state.
 * @property textDispatch The text reducer dispatch fn.
 * @property target The target text.
 * @property duration The duration that will take to place the target text.
 * @property onanimationdone A callback to be executed just after the animation is done.
 * @property null if there is no need to play an animation (`textState.text` == `target`) and a reference to an interval in case there is a playing animation.
 */
type GetAnimationIntervalParams = {
    textState: TextState;
    textDispatch: Dispatch<TextAction>;
    target: string;
    duration: number;
    onanimationdone?: (() => void) | undefined;
};
/**
 * Searches the differences between the `textState.text` value, calculates weather if there are remaining characters or rather some has to go out, and finally reproduces an animation setting the reducer's state.
 * @param params {@link GetAnimationIntervalParams}
 */
export declare function getAnimationInterval({ textState, textDispatch, target, duration, onanimationdone }: GetAnimationIntervalParams): NodeJS.Timeout;
export {};
//# sourceMappingURL=utils.d.ts.map