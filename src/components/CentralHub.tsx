import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Brain, 
  FileText, 
  Timer, 
  Users, 
  ShoppingBag, 
  Trophy,
  Sparkles
} from 'lucide-react'

interface ModuleCardProps {
  title: string
  description: string
  icon: React.ReactNode
  onClick: () => void
  delay?: number
  tokens?: number
}

function ModuleCard({ title, description, icon, onClick, delay = 0, tokens }: ModuleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      className="glass-panel p-6 cursor-pointer group relative overflow-hidden animate-float"
      style={{ animationDelay: `${delay * 0.5}s` }}
      onClick={onClick}
    >
      {/* Aurora border effect */}
      <div className="absolute inset-0 aurora-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 glass-panel rounded-2xl group-hover:animate-aurora-pulse">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="aurora-text text-xl font-bold mb-1">{title}</h3>
            {tokens && (
              <div className="flex items-center gap-1 text-aurora-mint text-sm">
                <Sparkles className="w-4 h-4" />
                <span>{tokens} tokens</span>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-aurora-mint/5 to-aurora-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
      </div>
    </motion.div>
  )
}

interface CentralHubProps {
  onModuleSelect: (module: string) => void
}

export default function CentralHub({ onModuleSelect }: CentralHubProps) {
  const [userTokens] = useState(1250)
  
  const modules = [
    {
      title: "Tutorial Theatre",
      description: "Immersive video learning with AI-powered overlays, interactive code examples, and gamified challenges.",
      icon: <Play className="w-6 h-6 text-aurora-mint" />,
      id: "tutorial-theatre",
      tokens: 50
    },
    {
      title: "AI Mentor",
      description: "Your personal learning companion providing guidance, explanations, and adaptive learning paths.",
      icon: <Brain className="w-6 h-6 text-aurora-lime" />,
      id: "ai-mentor",
      tokens: 25
    },
    {
      title: "Smart Notepad",
      description: "Intelligent markdown editor with auto-tagging, resource linking, and cloud synchronization.",
      icon: <FileText className="w-6 h-6 text-aurora-mint" />,
      id: "smart-notepad",
      tokens: 10
    },
    {
      title: "Aurawave™ Timer",
      description: "Advanced Pomodoro productivity timer with aurora-synchronized visuals and ambient soundscapes.",
      icon: <Timer className="w-6 h-6 text-aurora-lime" />,
      id: "aurawave-timer",
      tokens: 15
    },
    {
      title: "Aurora Lounge",
      description: "Community chat, voice rooms, and collaborative spaces with spatial audio and screen sharing.",
      icon: <Users className="w-6 h-6 text-aurora-mint" />,
      id: "aurora-lounge",
      tokens: 30
    },
    {
      title: "Asset Marketplace",
      description: "Premium game assets, 3D models, and resources with virtual Aurora Bank integration.",
      icon: <ShoppingBag className="w-6 h-6 text-aurora-lime" />,
      id: "asset-marketplace",
      tokens: 100
    }
  ]

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="aurora-text text-6xl font-bold mb-4">
          Aura Lux Labs
        </h1>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
          Welcome to the future of game development learning. 
          Enter the immersive 3D hub and begin your journey.
        </p>
        
        {/* Token display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass-panel inline-flex items-center gap-3 px-6 py-3 mt-6"
        >
          <Sparkles className="w-5 h-5 text-aurora-mint animate-aurora-pulse" />
          <span className="aurora-text text-lg font-semibold">{userTokens}</span>
          <span className="text-gray-300">Aurora Tokens</span>
        </motion.div>
      </motion.div>

      {/* Module Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              title={module.title}
              description={module.description}
              icon={module.icon}
              tokens={module.tokens}
              delay={index * 0.1}
              onClick={() => onModuleSelect(module.id)}
            />
          ))}
        </div>
      </div>

      {/* Achievement showcase */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="glass-panel p-8 mt-12 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-6">
          <Trophy className="w-8 h-8 text-aurora-lime" />
          <h2 className="aurora-text text-2xl font-bold">Recent Achievements</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "First Steps", desc: "Completed your first tutorial", reward: "50 tokens" },
            { title: "Code Master", desc: "Solved 10 coding challenges", reward: "100 tokens" },
            { title: "Community Star", desc: "Helped 5 fellow developers", reward: "75 tokens" }
          ].map((achievement, index) => (
            <div key={index} className="glass-panel p-4 text-center">
              <h3 className="text-aurora-mint font-semibold mb-1">{achievement.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{achievement.desc}</p>
              <span className="text-aurora-lime text-xs font-bold">+{achievement.reward}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}