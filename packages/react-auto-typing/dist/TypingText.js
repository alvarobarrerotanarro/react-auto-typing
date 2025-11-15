import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import DefaultCursor from "./DefaultCursor.js";
import { useTextAnimation } from "./hook.js";
/**
 * built-in React component that implements the useTextAnimation hook and provides a delay for the animation.
 */
const TypingText = ({ children = "", className, style, delay = 0, duration = 500, Cursor = DefaultCursor, CursorData = { colorTheme: "light" } }) => {
    const [textState, animationPlayer, animationKiller] = useTextAnimation({ target: children, duration });
    const [hideCursor, setHideCursor] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            animationPlayer(() => {
                setHideCursor(true);
            });
        }, delay);
        return () => {
            clearInterval(timeout);
            animationKiller();
        };
    }, [animationPlayer]);
    return (_jsxs("span", { style: style, className: className, children: [textState.text, !hideCursor ? _jsx(Cursor, { ...CursorData }) : null] }));
};
export default TypingText;
//# sourceMappingURL=TypingText.js.map