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
       // Use a template literal
headers: { 
  'Authorization': `Bearer ${API_KEY}`,
  'Content-Type': 'application/json'

      } 
   {export function deepseek<T = any>(obj: any, path: string | string[]): T | undefined {
  const keys = Array.isArray(path) ? path : String(path).split('.');
  let current: any = obj;
  for (const k of keys) {
    if (current == null) return undefined;
    current = current[k];
  }
  return current as T | undefined;
}
export default deepseek;
  
}
   
