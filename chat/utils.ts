import { askAI } from "./actions"
import { useChatStore } from "@/stores/chatStore"
interface submitMessageProps {
    prompt: string
    setInput?: (input: string) => void
}
export const submitMessage = async ({ prompt, setInput }: submitMessageProps) => {
  const trimmedPrompt = prompt.trim();
  const chatStore = useChatStore.getState();

  if (!trimmedPrompt || chatStore.isLoading) return;

  setInput?.("");

  chatStore.addUserMessage(trimmedPrompt);
  chatStore.setIsLoading(true);

  try {
    const response = await askAI(trimmedPrompt);
    chatStore.addAIMessage(response);
  } catch (error) {
    console.error(error);
    chatStore.addAIMessage("Sorry, something went wrong :'( Please try again.");
  } finally {
    chatStore.setIsLoading(false);
  }
};
