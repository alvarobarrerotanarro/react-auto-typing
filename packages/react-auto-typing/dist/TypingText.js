// NextJS compatibility
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import DefaultCursor from "./DefaultCursor.js";
import { useTextAnimation } from "./hook.js";
/**
 * built-in React component that implements the useTextAnimation hook and provides a delay for the animation.
 */
const TypingText = ({ children = "", className, style, delay = 0, duration = 500, cursor = _jsx(DefaultCursor, { colorTheme: "dark" }) }) => {
    const [textState, animationPlayer, animationKiller] = useTextAnimation({ target: children, duration });
    const [hideCursor, setHideCursor] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setHideCursor(false);
            animationPlayer(() => {
                setHideCursor(true);
            });
        }, delay);
        return () => {
            clearInterval(timeout);
            setHideCursor(true);
            animationKiller();
        };
    }, [animationPlayer]);
    return (_jsxs("span", { style: style, className: className, children: [textState.text, !hideCursor ? cursor : null] }));
};
export default TypingText;
//# sourceMappingURL=TypingText.js.map