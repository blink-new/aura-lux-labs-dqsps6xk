import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AuroraBackground from './components/AuroraBackground'
import CentralHub from './components/CentralHub'
import { ArrowLeft } from 'lucide-react'

function App() {
  const [currentModule, setCurrentModule] = useState<string | null>(null)
  const [timerPhase, setTimerPhase] = useState<'work' | 'break' | 'chill'>('work')

  const handleModuleSelect = (module: string) => {
    setCurrentModule(module)
  }

  const handleBackToHub = () => {
    setCurrentModule(null)
  }

  const renderModule = () => {
    if (!currentModule) return null

    const moduleContent = {
      'tutorial-theatre': (
        <div className="min-h-screen p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="aurora-text text-4xl font-bold mb-8">Tutorial Theatre</h1>
            <div className="glass-panel p-8 mb-8">
              <div className="aspect-video bg-gradient-to-br from-aurora-mint/20 to-aurora-lime/20 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 glass-panel rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[12px] border-l-aurora-mint border-y-[8px] border-y-transparent ml-1" />
                  </div>
                  <p className="text-gray-300">Video Player Coming Soon</p>
                </div>
              </div>
              <h2 className="aurora-text text-2xl font-bold mb-4">Introduction to Game Development</h2>
              <p className="text-gray-300 mb-6">
                Learn the fundamentals of game development with this comprehensive tutorial series. 
                Master the basics of game design, programming patterns, and industry best practices.
              </p>
              <div className="flex gap-4">
                <button className="glass-button aurora-text font-semibold">
                  Start Learning
                </button>
                <button className="glass-button text-gray-300">
                  View Curriculum
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
      'ai-mentor': (
        <div className="min-h-screen p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="aurora-text text-4xl font-bold mb-8">AI Mentor</h1>
            <div className="glass-panel p-8">
              <div className="text-center mb-8">
                <div className="w-24 h-24 glass-panel rounded-full flex items-center justify-center mx-auto mb-4 animate-aurora-pulse">
                  <span className="aurora-text text-3xl">🧠</span>
                </div>
                <h2 className="aurora-text text-2xl font-bold mb-2">Your AI Learning Companion</h2>
                <p className="text-gray-300">
                  Get personalized guidance, explanations, and learning paths tailored to your goals.
                </p>
              </div>
              <div className="space-y-4">
                <div className="glass-panel p-4">
                  <h3 className="text-aurora-mint font-semibold mb-2">Suggested Learning Path</h3>
                  <p className="text-gray-300 text-sm">Based on your progress, I recommend starting with Unity fundamentals.</p>
                </div>
                <div className="glass-panel p-4">
                  <h3 className="text-aurora-lime font-semibold mb-2">Quick Help</h3>
                  <p className="text-gray-300 text-sm">Ask me anything about game development, programming, or project management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      'smart-notepad': (
        <div className="min-h-screen p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="aurora-text text-4xl font-bold mb-8">Smart Notepad</h1>
            <div className="glass-panel p-8 h-96">
              <textarea
                className="w-full h-full bg-transparent text-gray-300 resize-none outline-none placeholder-gray-500"
                placeholder="Start writing your game development notes here...

# My Game Project Ideas

## Concept 1: Space Explorer
- Genre: Adventure/Puzzle
- Platform: PC/Mobile
- Key Features:
  - Procedural planet generation
  - Resource management
  - Story-driven exploration

## Learning Notes
- Remember to prototype early and iterate
- Focus on core gameplay loop first
- Consider player feedback throughout development"
              />
            </div>
          </div>
        </div>
      ),
      'aurawave-timer': (
        <div className="min-h-screen p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="aurora-text text-4xl font-bold mb-8">Aurawave™ Timer</h1>
            <div className="glass-panel p-12 mb-8">
              <div className="w-48 h-48 glass-panel rounded-full flex items-center justify-center mx-auto mb-8 animate-aurora-pulse">
                <div className="text-center">
                  <div className="aurora-text text-4xl font-bold mb-2">25:00</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">Focus Time</div>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <button 
                  className="glass-button aurora-text font-semibold"
                  onClick={() => setTimerPhase('work')}
                >
                  Start Work
                </button>
                <button 
                  className="glass-button aurora-text font-semibold"
                  onClick={() => setTimerPhase('break')}
                >
                  Take Break
                </button>
                <button 
                  className="glass-button aurora-text font-semibold"
                  onClick={() => setTimerPhase('chill')}
                >
                  Chill Mode
                </button>
              </div>
            </div>
            <p className="text-gray-300">
              Current phase: <span className="aurora-text font-semibold capitalize">{timerPhase}</span>
            </p>
          </div>
        </div>
      ),
      'aurora-lounge': (
        <div className="min-h-screen p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="aurora-text text-4xl font-bold mb-8">Aurora Lounge</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="glass-panel p-6 h-96 mb-4">
                  <h2 className="aurora-text text-xl font-bold mb-4">General Chat</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <span className="text-aurora-mint font-semibold">Alex:</span>
                      <span className="text-gray-300">Just finished my first Unity tutorial! 🎉</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-aurora-lime font-semibold">Maya:</span>
                      <span className="text-gray-300">Congrats! What are you building next?</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-aurora-mint font-semibold">Sam:</span>
                      <span className="text-gray-300">Anyone want to collaborate on a 2D platformer?</span>
                    </div>
                  </div>
                </div>
                <div className="glass-panel p-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full bg-transparent text-gray-300 outline-none placeholder-gray-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass-panel p-6">
                  <h3 className="aurora-text text-lg font-bold mb-4">Active Rooms</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Unity Beginners</span>
                      <span className="text-aurora-mint">12 online</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Game Jam 2024</span>
                      <span className="text-aurora-lime">8 online</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Art & Design</span>
                      <span className="text-aurora-mint">5 online</span>
                    </div>
                  </div>
                </div>
                <div className="glass-panel p-6">
                  <h3 className="aurora-text text-lg font-bold mb-4">Friends Online</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-aurora-mint rounded-full"></div>
                      <span className="text-gray-300">DevMaster_2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-aurora-lime rounded-full"></div>
                      <span className="text-gray-300">CodeWizard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      'asset-marketplace': (
        <div className="min-h-screen p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="aurora-text text-4xl font-bold mb-8">Asset Marketplace</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: "Sci-Fi Character Pack", price: "250", category: "3D Models" },
                { name: "Fantasy Environment", price: "180", category: "Textures" },
                { name: "UI Sound Effects", price: "75", category: "Audio" },
                { name: "Particle Effects Bundle", price: "320", category: "VFX" },
                { name: "Medieval Weapons", price: "150", category: "3D Models" },
                { name: "Ambient Music Pack", price: "200", category: "Audio" }
              ].map((asset, index) => (
                <div key={index} className="glass-panel p-6">
                  <div className="aspect-square bg-gradient-to-br from-aurora-mint/20 to-aurora-lime/20 rounded-2xl mb-4 flex items-center justify-center">
                    <span className="text-4xl">🎮</span>
                  </div>
                  <h3 className="aurora-text font-bold mb-2">{asset.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{asset.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="aurora-text font-bold">{asset.price} tokens</span>
                    <button className="glass-button text-sm px-4 py-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }

    return moduleContent[currentModule as keyof typeof moduleContent]
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <AuroraBackground timerPhase={timerPhase} />
      
      {/* Main Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {currentModule ? (
            <motion.div
              key={currentModule}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={handleBackToHub}
                className="fixed top-8 left-8 glass-button flex items-center gap-2 z-20"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Hub</span>
              </motion.button>
              
              {renderModule()}
            </motion.div>
          ) : (
            <motion.div
              key="hub"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <CentralHub onModuleSelect={handleModuleSelect} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App