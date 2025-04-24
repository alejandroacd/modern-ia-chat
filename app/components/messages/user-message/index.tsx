export default function UserMessage({ message }: { message: string }) {
    return <div className="relative  md:max-w-1/2 self-end bg-gradient-to-br px-3 from-[#1e293b]/40 to-[#0f172a]/60 text-white  rounded-lg shadow-lg backdrop-blur-md border border-slate-500/30">
        <div className="pr-10 pt-3 text-md leading-snug">
            {message}
        </div>
        <div className="text-xs text-slate-400 self-end text-end pl-6 pb-1">
            You
        </div>
    </div>
}