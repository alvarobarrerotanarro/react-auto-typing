type DefaultCursorProps = {
  colorTheme: "light" | "dark"
}

/**
 * The TypingText component includes this default cursor component.
 */
const DefaultCursor = ({ colorTheme }: DefaultCursorProps) => {
  return <div style={{ display: "inline-block", width: "3px", height: "0.8em", backgroundColor: colorTheme == "light" ? "black" : "white" }}></div>
}

export default DefaultCursor;