export function cutText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text
  }

  let newText = text.slice(0, maxLength)
  let index = newText.lastIndexOf(' ')
  return newText.slice(0, index) + '...'
}
