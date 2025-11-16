// NextJS compatibility
"use client"

import React, { useState, useEffect } from "react";
import DefaultCursor from "./DefaultCursor.js";
import { useTextAnimation } from "./hook.js";

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
const TypingText = ({
  children = "",
  className,
  style,
  delay = 0,
  duration = 500,
  cursor = <DefaultCursor colorTheme="light" />
}: TypingTextProps) => {
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

  /**
   * React 16 typescript types doesn't recognize instantiated react components as ReactNode.
   */
  return (
    <span style={style as any} className={className}>{textState.text}{!hideCursor ? (cursor as any) : null}</span>
  );
}

export default TypingText;