import React from 'react'

type ProjectType = {
  name: string
  problem: string
  tech: string[]
  link: string[]
  image: string
}

export default function Project() {
  const projects: ProjectType[] = [
    {
      name: "🌱 Plant Care Tracker App",
      problem: "People forget to care for their plants regularly.",
      tech: ["React", "Tailwind", "Node.js","ExpressJs", "MongoDB"],
      link: ["https://plantcare.app"],
      image: "/images/plantcare.png"
    },
    {
      name: "🎒 Lost & Found Items Management",
      problem: "Lost items were piling up with no proper way to manage or return them.",
      tech: ["React", "Tailwind", "Node.js", "ExpressJs", "MongoDB"],
      link: ["https://plantcare.app"],
      image: "/images/plantcare.png"
    },
    {
      name: "☕ Coffee Shop Management System",
      problem: "Manual order handling and inventory tracking led to delays and waste.",
      tech: ["React", "Tailwind", "Node.js","ExpressJs", "MongoDB"],
      link: ["https://plantcare.app"],
      image: "/images/plantcare.png"
    },
    {
      name: "🥫 Foods Date Management System",
      problem: "People often forget expiry dates, leading to waste or health risks.",
      tech: ["React", "Tailwind", "Node.js", "ExpressJs", "MongoDB"],
      link: ["https://plantcare.app"],
      image: "/images/plantcare.png"
    },
  ]

  return (
    <div id='project'>
      <div>
        <h1 className='text-center text-2xl'>What I've Build? / Project</h1>
        <hr className='mx-auto w-40 border-2 rounded-full border-green-400' />
        <p>
          Every project I’ve built started with a real problem, a challenge someone faced, or a need that wasn’t being met.
          I don’t just code features. I design solutions that work in the real world—reliable, responsive, and ready to grow.
          Here are a few things I’ve built so far, each one crafted with purpose.
        </p>

        <div className="mt-6">
          {projects.map((project, index) => (
            <div key={index} className="mb-6 p-4 border rounded shadow">
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{project.problem}</p>
              <div className="mt-2">
                <strong>Tech Used:</strong> {project.tech.join(', ')}
              </div>
              <div className="mt-1">
                <strong>Live:</strong> <a href={project.link[0]} className="text-blue-500 underline" target="_blank">{project.link[0]}</a>
              </div>
              <img src={project.image} alt={project.name} className="mt-3 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
