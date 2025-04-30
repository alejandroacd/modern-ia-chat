'use client'

import type React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Settings, Trash2, X, Check, Github, Heart, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

type ConfigButtonProps = {
  hasMessages: boolean
  onClearMessages: () => void
}

export default function ConfigButton({ hasMessages, onClearMessages }: ConfigButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isConfirming, setIsConfirming] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        infoRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node) &&
        !infoRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setShowInfo(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setIsComplete(false)
        setIsConfirming(false)
        setIsOpen(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [isComplete])

  const handleDeleteClick = () => {
    if (!isConfirming) {
      setIsConfirming(true)
      return
    }

    setIsDeleting(true)

    // Simulate deletion process
    setTimeout(() => {
      onClearMessages()
      setIsDeleting(false)
      setIsComplete(true)
    }, 800)
  }

  const handleCancelConfirmation = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsConfirming(false)
  }

  const handleInfoClick = () => {
    setShowInfo(true)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* Config Button */}
      <button
        ref={buttonRef}
        className={cn(
          'relative flex items-center justify-center rounded-full p-2 transition-all duration-300',
          'cursor-pointer',
          'border border-gray-800 shadow-sm',
          'text-gray-300 w-9 h-9',
          isOpen ? 'rotate-45' : 'rotate-0'
        )}
        style={{
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Configuration"
      >
        <Settings size={18} className="transition-transform duration-300" />
      </button>

      {/* Dropdown Menu */}
      <div
        ref={dropdownRef}
        className={cn(
          'absolute right-0 z-50 mt-2 w-52 rounded-md overflow-hidden transition-all duration-300 origin-top-right',
          'bg-black border border-gray-800 shadow-md',
          isOpen
            ? 'transform scale-100 opacity-100'
            : 'transform scale-95 opacity-0 pointer-events-none'
        )}
        style={{ zIndex: 50 }}
      >
        <div className="p-1">
          <button
            disabled={!hasMessages || isDeleting}
            className={cn(
              'flex items-center w-full px-3 py-2 text-sm text-left rounded-md transition-colors duration-200',
              isConfirming
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              (!hasMessages || isDeleting) && 'opacity-50 cursor-not-allowed pointer-events-none'
            )}
            onClick={handleDeleteClick}
          >
            {isComplete ? (
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center">
                  <Check size={16} className="mr-2 text-gray-300" />
                  <span>Messages deleted</span>
                </div>
              </div>
            ) : isDeleting ? (
              <div className="flex items-center">
                <Trash2 size={16} className="mr-2" />
                <span>Deleting messages</span>
                <span className="ml-2 flex">
                  <span
                    className="animate-bounce h-1 w-1 rounded-full bg-gray-400 mx-0.5"
                    style={{ animationDelay: '0ms' }}
                  ></span>
                  <span
                    className="animate-bounce h-1 w-1 rounded-full bg-gray-400 mx-0.5"
                    style={{ animationDelay: '150ms' }}
                  ></span>
                  <span
                    className="animate-bounce h-1 w-1 rounded-full bg-gray-400 mx-0.5"
                    style={{ animationDelay: '300ms' }}
                  ></span>
                </span>
              </div>
            ) : isConfirming ? (
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center">
                  <Trash2 size={16} className="mr-2" />
                  <span>Confirm deletion</span>
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  className="p-1 rounded-full hover:bg-gray-600 transition-colors"
                  onClick={handleCancelConfirmation}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleCancelConfirmation(e as
                      unknown as React.MouseEvent)
                  }}
                >
                  <X size={14} />
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <Trash2 size={16} className="mr-2" />
                <span>Delete all messages</span>
              </div>
            )}
          </button>

          <button
            className={cn(
              'flex items-center w-full px-3 py-2 text-sm text-left rounded-md transition-colors duration-200',
              'text-gray-300 hover:bg-gray-700 hover:text-white'
            )}
            onClick={handleInfoClick}
          >
            <Info size={16} className="mr-2" />
            <span>About this project</span>
          </button>
        </div>
      </div>

      <div
        ref={infoRef}
        className={cn(
          'absolute right-0 mt-2 w-82 z-50 rounded-xl overflow-hidden transition-all duration-300 origin-top-right',
          'border border-slate-900 bg-black',
          showInfo
            ? 'transform scale-100 opacity-100'
            : 'transform scale-95 opacity-0 pointer-events-none'
        )}
      >
        <div className="relative p-4">
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-900 rounded-full filter blur-xl opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-900 rounded-full filter blur-xl opacity-10"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex flex-col items-center mb-4">

              <h3 className="text-lg font-normal metallic-gradient-text text-white">Cosmic AI</h3>
              <p className="text-sm text-gray-400 text-center mt-1">
                Powered by OpenAI GPT-3.5
              </p>
            </div>

            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-center rounded-lg p-3">
                <Heart size={14} className="mr-2 text-purple-900" fill="currentColor" />
                <span className='metallic-gradient-text'>Developed with love by Ale Contreras</span>
              </p>

              <a
                href="https://github.com/alejandroacd/modern-ia-chat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  hover:bg-slate-900/50 rounded-lg p-3 transition-all"
              >
                <Github size={14} className="mr-2" />
                <span className='metallic-gradient-text'>View on GitHub</span>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-gray-500">
              <div className="flex items-center">
                <span>© {new Date().getFullYear()}</span>
              </div>
              <div className="flex items-center">
                <span className="animate-pulse animate">✨</span>
                <span className="ml-1">v1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}