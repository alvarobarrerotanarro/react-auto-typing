import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { useTextAnimation } from "./hook.js";
/**
 * built-in React component that implements the useTextAnimation hook and provides a delay for the animation.
 */
const TypingText = ({ children = "", className, style, delay = 0, duration = 500 }) => {
    const [textState, animationPlayer, animationKiller] = useTextAnimation({ target: children, duration });
    useEffect(() => {
        const timeout = setTimeout(() => {
            animationPlayer();
        }, delay);
        return () => {
            clearInterval(timeout);
            animationKiller();
        };
    }, []);
    return (_jsx("span", { style: style, className: className, children: textState.text }));
};
export default TypingText;
//# sourceMappingURL=TypingText.js.map