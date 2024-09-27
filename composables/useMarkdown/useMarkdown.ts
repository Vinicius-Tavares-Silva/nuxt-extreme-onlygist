import { marked } from "marked"

export function useMarkdown () {
  const render = (text: string) => {
    marked.parse(text)
  }
  return { render }
}