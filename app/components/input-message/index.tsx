'use client'
import { useState } from "react";
import { useChatStore } from "@/stores/chatStore";
import { submitMessage } from "@/chat/utils";
import { InputMessageWrapper } from "./wrapper";
import { TextInput } from "./text-input";
import SendButton from "./send-button";
export default function InputMessage() {
  const [input, setInput] = useState("");
  const  isLoading = useChatStore((state) => state.isLoading);

  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitMessage({
        prompt: input,
        setInput,
      });
    }
  };

  return (
    <InputMessageWrapper>
      <TextInput
       input={input} 
       onChange={setInput} 
       onKeyDown={handleKeyDown} />

      <SendButton
        input={input} 
        setInput={setInput} 
        isLoading={isLoading} />
    </InputMessageWrapper>

  );
}