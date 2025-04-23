import { Card } from "@/components/ui/card";
import Image from "next/image";
import CosmicIcon from "./components/main-icon";
import DefaultQuestions from "./components/default-questions";

export default async function ChatContainer() {
    return (
        <Card className=" backdrop-blur-xl  bg-slate-800/20 border-none w-full  min-h-[78vh]">
            <section className="flex items-center gap-6 flex-col justify-center">
            <CosmicIcon />
            <DefaultQuestions />
            </section>
        </Card>
    )
}