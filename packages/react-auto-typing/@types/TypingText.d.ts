import React, { type FC } from "react";
type CursorType = (props: Record<any, any>) => React.ReactNode;
type TypingTextProps = {
    children?: string;
    className?: string;
    style?: React.CSSProperties;
    delay?: number;
    duration?: number;
    Cursor?: CursorType;
    CursorData?: Record<any, any>;
};
/**
 * built-in React component that implements the useTextAnimation hook and provides a delay for the animation.
 */
declare const TypingText: FC<TypingTextProps>;
export default TypingText;
//# sourceMappingURL=TypingText.d.ts.map