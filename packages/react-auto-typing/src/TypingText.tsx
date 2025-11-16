// NextJS compatibility
"use client"

import React, { type FC, useState, useEffect } from "react";
import DefaultCursor from "./DefaultCursor.js";
import { useTextAnimation } from "./hook.js";

type CursorType = (props: Record<any, any>) => React.ReactNode;

type TypingTextProps = {
  children?: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  cursor?: React.ReactNode;
};

/**
 * built-in React component that implements the useTextAnimation hook and provides a delay for the animation.
 */
const TypingText: FC<TypingTextProps> = ({ children = "", className, style, delay = 0, duration = 500, cursor = <DefaultCursor colorTheme="dark" /> }) => {
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
    }
  }, [animationPlayer]);

  return (
    <span style={style} className={className}>{textState.text}{!hideCursor ? cursor : null}</span>
  );
}

export default TypingText;