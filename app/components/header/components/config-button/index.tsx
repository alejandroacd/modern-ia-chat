'use client'

import type React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Settings, Trash2, X, Check } from 'lucide-react'
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
    const dropdownRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                buttonRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
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

    return (
        <div className="relative">
            {/* Config Button */}
            <button
                ref={buttonRef}
                className={cn(
                    'relative flex items-center justify-center rounded-full p-2 transition-all duration-300',
                    'bg-gray-800 hover:bg-gray-700',
                    'border border-gray-700 shadow-sm',
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
                    'absolute right-0 mt-2 w-52 rounded-md overflow-hidden transition-all duration-300 origin-top-right',
                    'bg-gray-800 border border-gray-700 shadow-md',
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
                                        if (e.key === 'Enter' || e.key === ' ') handleCancelConfirmation(e as any)
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
                </div>
            </div>
        </div>
    )
}
