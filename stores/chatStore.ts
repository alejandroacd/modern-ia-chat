import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Message } from "@/types";

type ChatState = {
  messages: Message[];
  isLoading: boolean;
  addUserMessage: (content: string) => void;
  addAIMessage: (content: string) => void;
  setIsLoading: (loading: boolean) => void;
  resetMessages: () => void;
};

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      messages: [],
      isLoading: false,
      addUserMessage: (content) =>
        set((state) => ({
          messages: [
            ...state.messages,
            {
              id: crypto.randomUUID(),
              role: "user",
              content,
            },
          ],
        })),
      addAIMessage: (content) =>
        set((state) => ({
          messages: [
            ...state.messages,
            {
              id: crypto.randomUUID(),
              role: "ai",
              content,
            },
          ],
          isLoading: false,
        })),
      setIsLoading: (loading) => set({ isLoading: loading }),
      resetMessages: () => set({ messages: [] }),
    }),
    {
      name: "chat-storage", // key in localStorage
      partialize: (state) => ({ messages: state.messages }), // optionally skip persisting isLoading
    }
  )
);
