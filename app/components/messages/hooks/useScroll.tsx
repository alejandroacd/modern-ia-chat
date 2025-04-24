import { useRef, useEffect } from "react"
import { Message } from "@/types"
export const useScroll = (messages: Message[], isLoading: boolean) => {
    const bottomRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isLoading])

    return {
        bottomRef
    }
}