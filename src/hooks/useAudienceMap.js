import { useEffect, useRef, useState } from 'react'
import { tickerLines } from '../data/content.js'

const CELLS = 140
const ROUNDS = [10, 22, 38, 54, 70]
const SEED = 20260904
const TICKER_MAX = 3

/** Deterministic PRNG: the demo plays identically on every load. */
function lcg(seed) {
  let s = seed
  return () => {
    s = (s * 1103515245 + 12345) % 2147483648
    return (s >>> 8) / 8388608
  }
}

function shuffled(rand) {
  const order = Array.from({ length: CELLS }, (_, i) => i)
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  return order
}

function emptySnapshot() {
  return {
    cells: Array(CELLS).fill(''),
    round: 0,
    complete: false,
    viewers: 0,
    shares: 0,
    skips: 0,
    ticker: [],
  }
}

/** What a reduced-motion visitor sees instead of the animation: the end state. */
function finalSnapshot() {
  const order = shuffled(lcg(SEED))
  const cells = Array(CELLS).fill('')
  let viewers = 0
  let shares = 0
  let skips = 0

  order.slice(0, ROUNDS[ROUNDS.length - 1]).forEach((idx, n) => {
    const kind = n % 10 < 2 ? 'skip' : n % 10 < 4 ? 'share' : 'on'
    cells[idx] = kind
    if (kind === 'skip') skips += 1
    else {
      viewers += 1
      if (kind === 'share') shares += 1
    }
  })

  return {
    cells,
    round: ROUNDS.length - 1,
    complete: true,
    viewers,
    shares,
    skips,
    ticker: tickerLines.slice(0, TICKER_MAX).map(toTickerItem),
  }
}

function toTickerItem([kind, who, text], i = 0) {
  return { id: `${kind}-${i}-${who}`, kind, who, text }
}

/**
 * Drives the illustrative audience map in the hero. Animation only runs while the
 * panel is on screen and the tab is visible; it loops after each completed run.
 */
export function useAudienceMap({ reduced }) {
  const [snapshot, setSnapshot] = useState(() => (reduced ? finalSnapshot() : emptySnapshot()))
  const mapRef = useRef(null)

  useEffect(() => {
    if (reduced) {
      setSnapshot(finalSnapshot())
      return
    }

    let timer = null
    let line = 0
    let rand = lcg(SEED)
    let order = shuffled(rand)
    let cursor = 0
    let round = 0
    let current = emptySnapshot()
    setSnapshot(current)

    const reset = () => {
      rand = lcg(SEED)
      order = shuffled(rand)
      cursor = 0
      round = 0
      line = 0
      current = emptySnapshot()
      setSnapshot(current)
    }

    const tick = () => {
      if (cursor >= ROUNDS[round]) {
        round += 1
        if (round >= ROUNDS.length) {
          current = { ...current, complete: true }
          setSnapshot(current)
          timer = setTimeout(() => {
            reset()
            timer = setTimeout(tick, 900)
          }, 3600)
          return
        }
        current = { ...current, round }
        setSnapshot(current)
        timer = setTimeout(tick, 700)
        return
      }

      const idx = order[cursor]
      cursor += 1

      const roll = rand()
      const kind = roll < 0.22 ? 'skip' : roll < 0.4 ? 'share' : 'on'
      const cells = current.cells.slice()
      cells[idx] = kind

      current = {
        ...current,
        cells,
        skips: current.skips + (kind === 'skip' ? 1 : 0),
        shares: current.shares + (kind === 'share' ? 1 : 0),
        viewers: current.viewers + (kind === 'skip' ? 0 : 1),
      }

      if (cursor % 6 === 0) {
        const item = toTickerItem(tickerLines[line % tickerLines.length], line)
        line += 1
        current = { ...current, ticker: [item, ...current.ticker].slice(0, TICKER_MAX) }
      }

      setSnapshot(current)
      timer = setTimeout(tick, 90 + (cursor % 4) * 28)
    }

    const start = () => {
      if (!timer) timer = setTimeout(tick, 500)
    }
    const stop = () => {
      clearTimeout(timer)
      timer = null
    }

    let io = null
    if ('IntersectionObserver' in window && mapRef.current) {
      io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()), {
        threshold: 0.15,
      })
      io.observe(mapRef.current)
    } else {
      start()
    }

    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      io?.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reduced])

  return { ...snapshot, mapRef }
}
