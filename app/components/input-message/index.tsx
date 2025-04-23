import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function InputMessage() {
  return (
    <div className="relative w-full mx-auto my-2 md:my-4">
      <div className="relative flex items-center">
        <Textarea
          rows={1}
          data-has-listeners="true"
          placeholder="Type a message..."
          className="w-full pr-12 py-2   transition-all duration-500 bg-slate-800/20 text-slate-200 backdrop-blur-xl placeholder:text-white/60 
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
          whitespace-normal break-words resize-none"
        />
        <button 
          className="absolute right-3 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
          aria-label="Send message"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}