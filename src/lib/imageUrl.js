export function resizeImage(url, width) {
  try {
    const parsed = new URL(url)
    parsed.searchParams.set('w', width)
    return parsed.toString()
  } catch {
    return url
  }
}
