import { useState } from 'react'
import { askDeepSeek } from './deepseek'

function App() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const reply = await askDeepSeek(input)
    setResponse(reply)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>MekoAi Capsule</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask MekoAi anything..."
          style={{ width: '80%', padding: '0.5rem' }}
        />
        <button type="submit" style={{ marginLeft: '1rem' }}>Send</button>
      </form>
      <pre style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>{response}</pre>
    </div>
  )
}

export default App

