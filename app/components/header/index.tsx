'use client'

import { motion } from 'framer-motion'
import ConfigButton from './components/config-button'
import { useChatStore } from '@/stores/chatStore'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const letter = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // soft ease
    },
  },
}

export default function Header() {
  const text = 'Cosmic AI'
  const onClearMessages = useChatStore((state) => state.resetMessages)
  const hasMessages = useChatStore((state) => state.messages.length > 0)

  return (
    <header className="p-6 rounded-xl backdrop-blur-xl bg-slate-800/20 flex items-center justify-between flex-row">
      <motion.p
        className="text-5xl font-light tracking-tighter text-center optimized-metallic-reveal"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={letter}
            className={char === 'A' || char === 'I' ? 'font-lighter' : ''}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.p>
      <ConfigButton hasMessages={hasMessages} onClearMessages={onClearMessages} />
    </header>
  )
}
