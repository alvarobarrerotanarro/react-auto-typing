import { jsx as _jsx } from "react/jsx-runtime";
/**
 * The TypingText component includes this default cursor component.
 */
const DefaultCursor = ({ colorTheme }) => {
    return _jsx("div", { style: { display: "inline-block", width: "3px", height: "0.8em", backgroundColor: colorTheme == "light" ? "black" : "white" } });
};
export default DefaultCursor;
//# sourceMappingURL=DefaultCursor.js.map