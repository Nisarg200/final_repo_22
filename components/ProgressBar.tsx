'use client'
import React from 'react'
import { motion, LayoutGroup } from 'framer-motion'

type Props = { total: number; current: number }

export default function ProgressBar({ total, current }: Props) {
  const pills = Array.from({ length: total })

  return (
    <div className="progress-row" role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={current}>
      <LayoutGroup>
        <div
          className="progress-pills"
          style={{ display: 'flex', gap: 18, width: '100%', alignItems: 'center' }}
        >
          {pills.map((_, i) => {
            const index = i + 1
            const isActive = index === current
            const isCompleted = index < current
            const upcoming = index > current

            const bg = isActive
              ? 'var(--accent)'
              : isCompleted
              ? 'var(--accent-light)'
              : '#EDEDED'

            const height = isActive ? 8 : isCompleted ? 7 : 6
            const scaleX = isActive ? 1 : isCompleted ? 1 : 0.6

            return (
              <motion.button
                key={i}
                layout
                aria-current={isActive ? 'step' : undefined}
                className="progress-pill-btn"
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  layout
                  className="progress-pill"
                  initial={false}
                  animate={{
                    background: bg,
                    height,
                    scaleX,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{
                    width: '100%',
                    borderRadius: 9999,
                    transformOrigin: 'left center',
                    display: 'block',
                  }}
                />
              </motion.button>
            )
          })}
        </div>
      </LayoutGroup>
    </div>
  )
}
