'use client'
import { useState } from "react";
import { Send } from "lucide-react";
import { useChatStore } from "@/stores/chatStore";
import { submitMessage } from "@/chat/utils";
import { InputMessageWrapper } from "./wrapper";
import { TextInput } from "./text-input";
export default function InputMessage() {
  const [input, setInput] = useState("");
  const  isLoading = useChatStore((state) => state.isLoading);

  return (
    <InputMessageWrapper>
      <TextInput input={input} onChange={setInput} />
      <button
        role="button"
        aria-roledescription="send message"
        className={`absolute right-3 p-1 rounded-full  ${isLoading ? "pointer-events-none text-white/30" : "hover:text-white text-white/70"} hover:bg-white/10 transition-colors duration-200`}
        aria-label="Send message"
        onClick={() =>
          submitMessage({
            prompt: input,
            setInput,
          })}
      >
        <Send className="h-5 w-5" />
      </button>
    </InputMessageWrapper>

  );
}