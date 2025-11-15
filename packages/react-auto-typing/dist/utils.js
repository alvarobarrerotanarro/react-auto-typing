/**
 * @param a Any string.
 * @param b Any string.
 * @returns A common prefix sequence in the two strings.
 */
function getCommonPrefix(a, b) {
    let prefix = "";
    let matches = true;
    for (let i = 0; matches && i < a.length && i < b.length; i++) {
        if (a[i] != b[i]) {
            matches = false;
        }
        else {
            prefix += a[i];
        }
    }
    return prefix;
}
/**
 * Searches the differences between the `textState.text` value, calculates weather if there are remaining characters or rather some has to go out, and finally reproduces an animation setting the reducer's state.
 * @param textState A text reducer state.
 * @param textDispatch The text reducer dispatch fn.
 * @param target The target text.
 * @param duration The duration that will take to place the target text.
 * @returns null if there is no need to play an animation (`textState.text` == `target`) and a reference to an interval in case there is a playing animation.
 */
export function getAnimationInterval(textState, textDispatch, target, duration) {
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
        }
        else if (pos < target.length) {
            textDispatch({ type: "push", nextChar: target[pos] });
            pos++;
        }
    }, intervalTime);
    return interval;
}
//# sourceMappingURL=utils.js.map