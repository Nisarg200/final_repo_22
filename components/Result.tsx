// components/Result.tsx
'use client'
import React, { useEffect, useMemo } from 'react'
import { motion, useAnimation } from 'framer-motion'

const DIGIT_HEIGHT = 214
const FONT_SIZE = 214

interface DigitReelProps {
  digit: number
  delay?: number
  cycles?: number
}

interface ResultProps {
  score: number
  onRestart: () => void
  delay?: number
  cycles?: number
}

function padScore(n: number) {
  return String(Math.round(n)).padStart(2, '0')
}

function DigitReel({ digit, delay = 0, cycles = 3 }: DigitReelProps) {
  const controls = useAnimation()
  const totalStops = cycles * 10 + digit
  const targetY = -totalStops * DIGIT_HEIGHT

  const numbers = useMemo(() => {
    const arr: number[] = []
    for (let c = 0; c < cycles; c++) {
      for (let d = 0; d < 10; d++) arr.push(d)
    }
    for (let d = 0; d <= digit; d++) arr.push(d)
    return arr
  }, [digit, cycles])

  useEffect(() => {
    const t = setTimeout(() => {
      controls.start({
        y: targetY,
        transition: {
          type: 'spring',
          stiffness: 120,
          damping: 16,
          mass: 0.9,
        },
      })
    }, delay)
    return () => clearTimeout(t)
  }, [controls, targetY, delay])

  return (
    <div className="reel-mask" style={{ height: DIGIT_HEIGHT, overflow: 'hidden' }}>
      <motion.div animate={controls} initial={{ y: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {numbers.map((n, i) => (
            <div
              key={`${n}-${i}`}
              className="reel-number"
              style={{
                height: DIGIT_HEIGHT,
                fontFamily: "'DM Serif Display', serif",
                fontSize: FONT_SIZE,
                lineHeight: `${DIGIT_HEIGHT}px`,
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                userSelect: 'none'
              }}
            >
              {n}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function Result({ score, onRestart, delay = 300, cycles = 4 }: ResultProps) {
  const pct = Math.round(score)
  const padded = padScore(pct)
  const digits = padded.split('').map(d => parseInt(d, 10))

  return (
    <div className="result-screen">
      <div className="result-pill">Keep Learning!</div>

      <h2 className="result-title">Your Final score is</h2>

      <div className="reel-wrapper">
        <div className="rolling-digits">
          {digits.map((digit, idx) => (
            <DigitReel
              key={idx}
              digit={digit}
              delay={delay + idx * 250}
              cycles={cycles}
            />
          ))}

          <span className="percent-symbol">%</span>
        </div>
      </div>

      <button className="result-restart" onClick={onRestart}>
        Start Again
      </button>
    </div>
  )
}
