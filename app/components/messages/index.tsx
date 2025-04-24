'use client'
import { useChatStore } from "@/stores/chatStore";
import CosmicIcon from "../../components/chat-container/components/main-icon";
import DefaultQuestions from "../../components/chat-container/components/default-questions";
import MessageBox from "./message-box";
export default function Messages() {
    const messages = useChatStore((state) => state.messages);
    const isLoading = useChatStore((state) => state.isLoading);
    return <section className="messages absolute bottom-0 overflow-y-auto gap-4 max-h-[78vh] p-3 w-full flex flex-col gap-3">
          <section className="flex items-center gap-6 flex-col justify-center">
                <CosmicIcon />
                <DefaultQuestions />
            </section>
        {messages.map((message, index) => (
            <MessageBox key={index} message={message} />
        ))}
        {isLoading && (
            <div className="flex items-center flex-row gap-5 m-5">
                <div className="animate-spin text-white rounded-full h-8 w-8 border-b-2 border-gray-200"></div>
                <span className="metallic-gradient-text">Generating...</span>
            </div>
        )}
    </section>
}