export function cutText(text: string): string {
  if (text.length <= 210) {
    return text
  }

  let newText = text.slice(0, 210)
  let index = newText.lastIndexOf(' ')
  return newText.slice(0, index) + '...'
}
