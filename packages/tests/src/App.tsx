import React, { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { TypingText } from "@alvarobarrerotanarro/react-auto-typing"


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



function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("");
  const textarea = useRef<HTMLTextAreaElement | null>(null);

  const handleTextUpdate: React.MouseEventHandler = () => {
    if (textarea.current != null)
      setText(textarea.current.value);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1><TypingText duration={500} delay={1000}>{text}</TypingText></h1>
      <h2><TypingText duration={1000} cursor={<CustomCursor height={20} />}>{text}</TypingText></h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <textarea ref={textarea}></textarea>
        <button onClick={handleTextUpdate}>Update</button>
      </div>
    </>
  )
}

export default App
