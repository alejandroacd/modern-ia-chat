import { Card } from "@/components/ui/card";
import Messages from "../messages";

export default async function ChatContainer() {
    return (
        <Card className=" backdrop-blur-md border-none overflow-hidden relative bg-slate-800/20  w-full  min-h-[78vh]">
            <Messages />
        </Card>
    )
}