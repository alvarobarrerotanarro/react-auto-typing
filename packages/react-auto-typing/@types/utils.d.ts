import type { Dispatch } from "react";
import type { TextAction, TextState } from "./hook.js";
/**
 * Searches the differences between the `textState.text` value, calculates weather if there are remaining characters or rather some has to go out, and finally reproduces an animation setting the reducer's state.
 * @param textState A text reducer state.
 * @param textDispatch The text reducer dispatch fn.
 * @param target The target text.
 * @param duration The duration that will take to place the target text.
 * @returns null if there is no need to play an animation (`textState.text` == `target`) and a reference to an interval in case there is a playing animation.
 */
export declare function getAnimationInterval(textState: TextState, textDispatch: Dispatch<TextAction>, target: string, duration: number): NodeJS.Timeout;
//# sourceMappingURL=utils.d.ts.map