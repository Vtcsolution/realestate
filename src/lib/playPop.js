let audioCtx

function getContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext
  if (!AudioContextClass) return null
  if (!audioCtx) audioCtx = new AudioContextClass()
  return audioCtx
}

export function playPop(frequency = 600) {
  const ctx = getContext()
  if (!ctx) return

  try {
    if (ctx.state === 'suspended') ctx.resume()

    const oscillator = ctx.createOscillator()
    const gain = ctx.createGain()

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime)

    gain.gain.setValueAtTime(0.0001, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.13)

    oscillator.connect(gain)
    gain.connect(ctx.destination)

    oscillator.start()
    oscillator.stop(ctx.currentTime + 0.14)
  } catch {
    // Web Audio unavailable in this environment — fail silently
  }
}
