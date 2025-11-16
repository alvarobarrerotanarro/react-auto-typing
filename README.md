# react-auto-typing
A lightweight React library for creating typing text animations with minimal effort.

It provides a ready-to-use component for quick implementation, or you can use the underlying React hook to build custom components.

![](./media/demonstration.mp4)

## Quick Example

The following example will type at screen the words "This is magic!".

```ts
import { TypingText } from "@alvarobarrerotanarro/react-auto-typing"

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2><TypingText>This is magic!</TypingText></h2>
    </div>
  );
}
```

## Timings

We may also customize how much time will it take to type the whole text, to do so we can use the `duration` and `delay` props. The first one is an absolute measure of the time that the component will take to type the text, whereas the second one indicates when the animation begings.

```ts
import { TypingText } from "@alvarobarrerotanarro/react-auto-typing"

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>
        <TypingText
          duration={1200} {/* 1200 ms */}
          delay={500} {/* 500 ms */}
        >
          This is magic!
        </TypingText>
      </h2>
    </div>
  );
}
```

## Cursors

The `TypingText` React component automatically brings a typing cursor with it. However we may be interested in adding custom styles to it or replace it by any other react node such as other component.

In the following example we are replacing the old cursor component by a new one that consists of the same one but in light mode version.

```ts
import { TypingText, DefaultCursor } from "@alvarobarrerotanarro/react-auto-typing"

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>
        <TypingText
          cursor={<DefaultCursor colorTheme={"light"} />}
        >
          This is magic!
        </TypingText>
      </h2>
    </div>
  );
}

```

In this other example we are creating our own cursor component and then passing it to TypingText.

```ts
import { TypingText, DefaultCursor } from "@alvarobarrerotanarro/react-auto-typing"

function CustomCursor({ height = 12 }: { height?: number }) {
  return (
    <div
      style={{
        display: "inline-block",
        width: "3px",
        height: `${height}px`
      }}
    >
      <div style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#0099ff"
      }}>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>
        <TypingText
          cursor={<CustomCursor height={20} />}
        >
          This is magic!
        </TypingText>
      </h2>
    </div>
  );
}

```

## useAnimationText

If you need a higher level of control over the animation you can try to implement your own version of the `TypingText` component by consuming the underlying custom hook `useAnimationText`.

```ts
import { useTextAnimation } from "@alvarobarrerotanarro/react-auto-typing"

const MyDynamicText = ({
  children = "",
  className,
  style,
  duration = 500,
}: TypingTextProps) => {

  /**
   * textState - the text state
   * animationPlayer - starts the animation
   * animationKiller - stops the current animation
   */
  const [textState, animationPlayer, animationKiller] = useTextAnimation({ target: children, duration });

  /**
   * If the animationPlayer changes, kill the previous
   * animaton and play the new one.
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      animationPlayer();
    }, delay);

    return () => {
      clearInterval(timeout);
      animationKiller();
    }
  }, [animationPlayer]);

  return (
    <span className={className}>{textState.text}</span>
  );
}
```