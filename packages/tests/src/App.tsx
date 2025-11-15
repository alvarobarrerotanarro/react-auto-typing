import React, { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { TypingText } from 'react-auto-typing'

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
      <h1><TypingText duration={500} CursorData={{ colorTheme: "dark" }}>{text}</TypingText></h1>
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
