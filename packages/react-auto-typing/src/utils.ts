import type { Dispatch } from "react";
import type { TextAction, TextState } from "./hook.js";

/**
 * @param a Any string.
 * @param b Any string.
 * @returns A common prefix sequence in the two strings. 
 */
function getCommonPrefix(a: string, b: string) {
  let prefix = "";
  let matches = true;
  for (let i = 0; matches && i < a.length && i < b.length; i++) {
    if (a[i] != b[i]) {
      matches = false;
    } else {
      prefix += a[i];
    }
  }
  return prefix;
}

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
  textState: TextState,
  textDispatch: Dispatch<TextAction>,
  target: string,
  duration: number,
  onanimationdone?: (() => void) | undefined
};

/**
 * Searches the differences between the `textState.text` value, calculates weather if there are remaining characters or rather some has to go out, and finally reproduces an animation setting the reducer's state.
 * @param params {@link GetAnimationIntervalParams}
 */
export function getAnimationInterval({ textState, textDispatch, target, duration, onanimationdone }: GetAnimationIntervalParams) {
  /**
   * 1. Get the common prefix between target and the text state. 
   * 2. Remove what isn't common in the text state.
   * 3. Write in the text state what is left to reach target.
   */

  const commonPrefix = getCommonPrefix(textState.text, target);
  let deleteCount = textState.text.length - commonPrefix.length;

  let pos = textState.text.length - deleteCount;

  const intervalTime = duration / target.length;
  const interval = setInterval(() => {
    if (deleteCount > 0) {
      textDispatch({ type: "pop" });
      deleteCount--;
    } else if (pos < target.length) {
      textDispatch({ type: "push", nextChar: target[pos]! });
      pos++
    } else {
      clearInterval(interval);
      if (onanimationdone)
        onanimationdone();
    }
  }, intervalTime);


  return interval;
}