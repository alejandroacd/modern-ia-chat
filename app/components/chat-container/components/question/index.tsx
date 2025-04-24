'use client'
import { Card, CardTitle } from "@/components/ui/card";
import { submitMessage } from "@/chat/utils";
export default function Question({ question }: { question: string }) {
  return (
    <div  className="relative group  rounded-lg overflow-hidden">
      {/* Glowing border - visible only on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500 to-purple-500/0 
          opacity-0 group-hover:opacity-10   blur-md transition-all duration-200 -z-10" />

      {/* Main card */}
      <Card onClick={() => submitMessage({ prompt: question })} className="bg-slate-200/5 border  border-slate-800 p-4 md:p-5
          group-hover:border-indigo-400/30 group-hover:shadow-[0_0_15px_-3px_rgba(192,132,252,0.5)]
          transition-all duration-200 " >

        {/* Perfectly visible text */}
        <CardTitle className="text-sm md:text-base font-normal metallic-gradient-text">
          {question}
        </CardTitle>
      </Card>
    </div>
  );
}