import React, { type FC, useEffect } from "react";
import { useTextAnimation } from "./hook.js";

type TypingTextProps = {
  children?: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
};

/**
 * built-in React component that implements the useTextAnimation hook and provides a delay for the animation.
 */
const TypingText: FC<TypingTextProps> = ({ children = "", className, style, delay = 0, duration = 500 }) => {
  const [textState, animationPlayer, animationKiller] = useTextAnimation({ target: children, duration });

  useEffect(() => {
    const timeout = setTimeout(() => {
      animationPlayer();
    }, delay);

    return () => {
      clearInterval(timeout);
      animationKiller();
    }
  }, []);

  return (
    <span style={style} className={className}>{textState.text}</span>
  );
}

export default TypingText;