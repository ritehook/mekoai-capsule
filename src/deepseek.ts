`ts
import axios from 'axios'

const API_URL = 'https://api.deepseek.com/v1/chat/completions'
const APIKEY = import.meta.env.VITEDEEPSEEKAPIKEY

export async function askDeepSeek(prompt: string): Promise<string> {
  try {
    const res = await axios.post(
      API_URL,
      {
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.0
      },
      {
        headers: {
          'Authorization': Bearer ${API_KEY},
          'Content-Type': 'application/json'
        }
      }
    )
    return res.data.choices[0].message.content
  } catch (err: any) {
    return Error: ${err.message}
  }
}
`
