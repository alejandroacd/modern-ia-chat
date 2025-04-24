'use client'
import './styles.css'
import { useChatStore } from "@/stores/chatStore"
import CosmicIcon from "../../components/chat-container/components/main-icon"
import DefaultQuestions from "../../components/chat-container/components/default-questions"
import MessageBox from "./message-box"
import { useScroll } from './hooks/useScroll'
import LoadingMessage from './components/loading'
import MessagesWrapper from './wrapper'
export default function Messages() {
  const messages = useChatStore((state) => state.messages)
  const isLoading = useChatStore((state) => state.isLoading)
  const { bottomRef } = useScroll(messages, isLoading)

  return (
    <MessagesWrapper>
      <section className="flex items-center gap-6 flex-col justify-center md:mb-[20vh]">
        <CosmicIcon />
        <DefaultQuestions />
      </section>

      {messages.map((message, index) => <MessageBox key={index} message={message} />)}
      {isLoading && <LoadingMessage />}

      <div ref={bottomRef} />
    </MessagesWrapper>

  )
}
