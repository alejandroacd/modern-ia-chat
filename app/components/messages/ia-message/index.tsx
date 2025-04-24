'use client'

import React from "react"
import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function IaMessage({ message }: { message: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative backdrop-blur-md md:max-w-3/4 lg:max-w-1/2 self-start bg-gradient-to-br from-[#2e1065]/80 via-[#1e1b4b]/60 to-[#0f172a]/40
      text-white px-3 rounded-lg shadow-xl border border-violet-500/30"
        >
            <div className="pr-14 text-md leading-snug pt-3 pb-1 prose prose-invert prose-sm max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{message}</ReactMarkdown>
            </div>
            <div className="text-xs text-end text-violet-400 pb-1 pt-1">
                Cosmic AI
            </div>
        </motion.div>
    )
}
