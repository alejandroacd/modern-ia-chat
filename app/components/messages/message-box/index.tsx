
import { Message } from "@/types";
import UserMessage from "../user-message";
import IaMessage from "../ia-message";
export default function MessageBox({ message }: { message: Message }) {
    return (
        <>
            {message.role === "user" && <UserMessage message={message.content} />}
            {message.role === "ai" && <IaMessage message={message.content} />}
        </>
    )
}