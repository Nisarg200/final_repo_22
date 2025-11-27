
import React from 'react'
import type { Question } from '../lib/utils'

type Props = {
  q: Question
  selected: string | null
  onSelect: (opt: string) => void
}

export default function Question({ q, selected, onSelect }: Props) {
  return (
    <>
      {q.options.map((opt) => {
        const active = selected === opt
        return (
          <label key={opt} className={`option-row ${active ? 'ring-2 ring-[rgba(21,49,61,0.08)] bg-white/80' : ''}`} onClick={() => onSelect(opt)}>
            <span>{opt}</span>
            <input
              className="visually-hidden"
              type="radio"
              name={`q-${q.id}`}
              value={opt}
              checked={active}
              onChange={() => onSelect(opt)}
            />
          </label>
        )
      })}
    </>
  )
}
