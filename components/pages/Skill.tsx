import React from 'react'

export default function Skill() {
  type SkillType = {
    name: string,
    color: string,
    icon: React.ReactNode
  }
  return (
    <div id='skill'>
      <div>
        <h1>How I Build</h1>
        <p>
          I don’t just learn tools, I learn what they’re for. Behind every feature I build, there’s a decision, A reason, A trade‑off. That’s why I focus on mastering the fundamentals and understanding how things work under the hood.
          I don’t get stuck in one stack... whenever a project calls  for something new, I dive in and adapt.But here are the tools I currently build with. Each one chosen for clarity, speed, and long-term maintainability:
        </p>
          <h2>
            Frontend:
            <div></div>
        </h2>
          <h2>
            Backend:
            <div></div>
        </h2>
          <h2>
            Database:
            <div></div>
          </h2>
          <h2>
            Tools:
            <div></div>
          </h2>
      </div>
    </div>
  )
}

