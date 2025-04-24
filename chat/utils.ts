import { askAI } from "./actions"
import { useChatStore } from "@/stores/chatStore"
interface submitMessageProps {
    prompt: string
    setInput?: (input: string) => void
}
export const submitMessage = async ({ prompt, setInput }: submitMessageProps) => {
    if (prompt.trim() && !useChatStore.getState().isLoading) {
      if (setInput) {
        setInput("");
      }
      useChatStore.getState().addUserMessage(prompt);
      useChatStore.getState().setIsLoading(true);
      askAI(prompt)
        .then((response) => {
          const aiResponse = response
          useChatStore.getState().addAIMessage(aiResponse);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          useChatStore.getState().setIsLoading(false);
        });
    }
  }