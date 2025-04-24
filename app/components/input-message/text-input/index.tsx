import { Textarea } from "@/components/ui/textarea"
import { useChatStore } from "@/stores/chatStore"
import React from "react";
interface TextInputProps {
    input: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
}
export const TextInput = ({ input, onChange, onKeyDown}: TextInputProps) => {
    const isLoading = useChatStore((state) => state.isLoading);
    return <Textarea
    rows={1}
    data-has-listeners="true"
    disabled={isLoading}
    onKeyDown={onKeyDown}
    value={input}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Type a message..."
    className={`w-full 
      pr-12 
      py-2   
      transition-all 
      duration-500 
      bg-slate-800/20 
      text-slate-200 
      backdrop-blur-xl 
      placeholder:text-white/60 
      border-slate-200/10
      focus:border-slate-900/50 
      pb-12
      focus:outline-none 
      focus:ring-0 
      focus:ring-offset-0 
      focus-visible:border-slate-200/30 
      focus-visible:outline-none 
      focus-visible:ring-0 
      focus-visible:ring-offset-0 
      whitespace-normal 
      break-words 
      resize-none`}
  />
}