import { submitMessage } from "@/chat/utils";
import { Send } from "lucide-react";

interface SendButtonProps {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean
}
export default function SendButton({
    input,
    setInput,
    isLoading }: SendButtonProps) {
    return <button
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
}