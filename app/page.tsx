// app/page.tsx
import React from 'react'
import Quiz from '../components/Quiz'

export default function HomePage() {
  return (
    <div className="canvas-1920">
      <div className="aurora" />
      <div className="ellipse ell1" />
      <div className="ellipse ell2" />
      <div className="ellipse ell3" />
      <div className="ellipse ell4" />
      <div className="ellipse ell5" />
      <div className="cloud-bg" />
      <Quiz />
    </div>
  )
}
