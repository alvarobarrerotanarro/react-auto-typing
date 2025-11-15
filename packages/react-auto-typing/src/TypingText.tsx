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
  Cursor?: CursorType;
  CursorData?: Record<any, any>
};

/**
 * built-in React component that implements the useTextAnimation hook and provides a delay for the animation.
 */
const TypingText: FC<TypingTextProps> = ({ children = "", className, style, delay = 0, duration = 500, Cursor = DefaultCursor as CursorType, CursorData = { colorTheme: "light" } }) => {
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
    }
  }, [animationPlayer]);

  return (
    <span style={style} className={className}>{textState.text}{!hideCursor ? <Cursor {...CursorData} /> : null}</span>
  );
}

export default TypingText;