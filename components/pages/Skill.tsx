'use-client'
import React from 'react'
import UnderLine from '../shared/UnderLine'

export default function Skill() {
  type SkillType = {
    name: string;
    color: string;
    icon: React.ReactNode;
    level: number;
    category: string;
  };

  // Mock data - replace with your actual skills
  const frontendSkills: SkillType[] = [
    {
      name: 'React',
      color: '#61DAFB',
      icon: '⚛️',
      level: 90,
      category: 'Frontend',
    },
    {
      name: 'TypeScript',
      color: '#3178C6',
      icon: '📘',
      level: 85,
      category: 'Frontend',
    },
    {
      name: 'Next.js',
      color: '#000000',
      icon: '▲',
      level: 88,
      category: 'Frontend',
    },
    {
      name: 'Tailwind CSS',
      color: '#06B6D4',
      icon: '💨',
      level: 92,
      category: 'Frontend',
    },
    {
      name: 'JavaScript',
      color: '#F7DF1E',
      icon: '🟨',
      level: 95,
      category: 'Frontend',
    },
    {
      name: 'HTML5',
      color: '#E34F26',
      icon: '🌐',
      level: 98,
      category: 'Frontend',
    },
    {
      name: 'CSS3',
      color: '#1572B6',
      icon: '🎨',
      level: 90,
      category: 'Frontend',
    },
  ];
  return (
    <div id='skill'>
      <div>
        <h2>How I Build</h2>
        <UnderLine />
        <p>
          I don’t just learn tools, I learn what they’re for. Behind every feature I build, there’s a decision, A reason, A trade‑off. That’s why I focus on mastering the fundamentals and understanding how things work under the hood.
          I don’t get stuck in one stack... whenever a project calls  for something new, I dive in and adapt.But here are the tools I currently build with. Each one chosen for clarity, speed, and long-term maintainability:
        </p>
          {/* Frontend Skills Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Frontend</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-primary-backgournd rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary hover:border-secondary transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Skill Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-md"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-lg">{skill.name}</h4>
                    <p className="text-sm text-gray-500">{skill.category}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}40`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  Building modern, responsive web applications with focus on performance and user experience.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Add similar sections for Backend, Tools, etc. */}
      </div>

      {/* <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style> */}
    </div>
  )
}

