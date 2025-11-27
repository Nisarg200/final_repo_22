
'use client'
import React, { useState } from 'react'
import { QUESTIONS } from '../lib/utils'
import Question from './Question'
import ProgressBar from './ProgressBar'
import Result from './Result'
import { AnimatePresence, motion } from "framer-motion";

export default function Quiz() {
  const total = QUESTIONS.length
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number,string|null>>(
    Object.fromEntries(QUESTIONS.map(q => [q.id, null]))
  )
  
  const [showResult, setShowResult] = useState(false)
  
  const current = QUESTIONS[index]

  function selectOption(opt: string) {
    setAnswers(prev => ({ ...prev, [current.id]: opt }))
  }

  function prev() { setIndex(i => Math.max(0, i-1)) }
  function next() { setIndex(i => Math.min(total-1, i+1)) }

  function submit() {
    setShowResult(true)
  }

  function restart() {
    setAnswers(Object.fromEntries(QUESTIONS.map(q => [q.id, null])))
    setIndex(0)
    setShowResult(false)
  }

  const answeredCount = Object.values(answers).filter(Boolean).length
  const percent = Math.round((answeredCount / total) * 100)

  if (showResult) {
    return <Result score={percent} onRestart={restart} delay={400} cycles={4} />
  }

  return (
    <main className="main-content" role="main">
      <div className="inner-card" aria-hidden />

      <h1 className="title-dm">Test Your Knowledge</h1>
      <div className="subtitle">Answer all questions to see your results</div>

      <div className="progress-row" aria-hidden>
        <ProgressBar total={total} current={index+1} />
      </div>

      <div className="question-pill" style={{ zIndex: 20 }}>
        <div className="question-text">{current.id}. {current.text}</div>
      </div>

      <div className="options" style={{ zIndex: 20 }}>
        <Question
          q={current}
          selected={answers[current.id] ?? null}
          onSelect={selectOption}
        />
      </div>

      {index === 0 && (
        <img
          src="/paw-badge.gif"
          alt="paw"
          className="paw-badge"
          aria-hidden="true"
        />
      )}

      {index === 0 && (
        <div className="best-luck">
          Best of Luck !
        </div>
      )}

      <div className="nav-group" style={{ zIndex: 20 }}>
        <button className="nav-btn" onClick={prev} aria-label="Previous" disabled={index===0}>
          <img src="/left-arrow.svg" alt="prev" width="24" height="24" />
        </button>
        {index === total - 1 ? (
          <button className="nav-btn" onClick={submit} aria-label="Submit">
            <span style={{ fontSize: 12, fontWeight: 700 }}>Submit</span>
          </button>
        ) : (
          <button className="nav-btn" onClick={next} aria-label="Next" disabled={index === total - 1}>
            <img src="/right-arrow.svg" alt="next" width="24" height="24" />
          </button>
        )}
      </div>
    </main>
  )
}
