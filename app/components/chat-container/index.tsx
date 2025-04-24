import { Card } from "@/components/ui/card";
import Image from "next/image";
import CosmicIcon from "./components/main-icon";
import DefaultQuestions from "./components/default-questions";
import Messages from "../messages";

export default async function ChatContainer() {
    return (
        <Card className=" backdrop-blur-md border-none overflow-hidden relative bg-slate-800/20  w-full  min-h-[78vh]">

          
            <Messages />
        </Card>
    )
}